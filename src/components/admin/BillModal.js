import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getDataWithToken } from "../../utils/fetchApi";
import { jsPDF } from "jspdf";

const BillModal = ({ status, setModal, data, IdLich, lichDatData }) => {
  const user = useSelector((state) => state.auth.login.currentUser);
  const [error, setError] = useState();
  const [message, setMessage] = useState();
  const [serviceCost, setServiceCost] = useState(0);
  const [productCost, setProductCost] = useState(0);

  const [serviceBooking, setServiceBooking] = useState([]);

  const [productData, setProductData] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const now = new Date();
    const month = now.getMonth() + 1;
    const monthtemp = month.toString().length == "1" ? "0" + month : month;

    const datetemp =
      now.getDate().toString().length == "1"
        ? "0" + now.getDate()
        : now.getDate();

    const dateCreateBill = `${now.getFullYear()}-${monthtemp}-${datetemp}`;
    status === "Add Empty" && 
    !productData.some((item) => {
      return item.SoLuong > 0;
    }) &&
    setError("Không được để trống sản phẩm bán kèm");

    status === "Add Empty" && !error &&
      productData.some((item) => {
        return item.SoLuong > 0;
      }) &&
      (await fetch(`http://localhost:8080/v1/bill/`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          token: `${user.token}`,
        },
        body: JSON.stringify([
          {
            NgayTaoHoaDon: dateCreateBill,
            IdLich: "",
            TongTien: productCost + serviceCost,
            GioTaoHoaDon: `${now.getHours()}:${now.getMinutes()}`,
          },
          { productData: productData },
        ]),
      }).then((res) => {
        // console.log([
        //   {
        //     NgayTaoHoaDon: dateCreateBill,
        //     IdLich: "",
        //     TongTien: productCost + serviceCost,
        //     GioTaoHoaDon: `${now.getHours()}:${now.getMinutes()}`,
        //   },
        //   { productData: productData },
        // ]);
        setModal(false);
      //   console.log(res)

      //   res.ok && setMessage("Create bill successfully")
      // !res.ok && setError("Error")
      }));



    status === "Add" && !error &&
      (await fetch(`http://localhost:8080/v1/bill/`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          token: `${user.token}`,
        },
        body: JSON.stringify([
          {
            NgayTaoHoaDon: dateCreateBill,
            IdLich: IdLich,
            TongTien: productCost + serviceCost,
            GioTaoHoaDon: `${now.getHours()}:${now.getMinutes()}`,
          },
          { productData: productData },
        ]),
      }).then((res) => {
        // console.log([
        //   {
        //     NgayTaoHoaDon: dateCreateBill,
        //     IdLich: IdLich,
        //     TongTien: productCost + serviceCost,
        //     GioTaoHoaDon: `${now.getHours()}:${now.getMinutes()}`,
        //   },
        //   { productData: productData },
        // ]);
         setModal(false);
        
      }));

      // console.log([
      //   {
      //     NgayTaoHoaDon: dateCreateBill,
      //     IdLich: IdLich,
      //     TongTien: productCost + serviceCost,
      //     GioTaoHoaDon: `${now.getHours()}:${now.getMinutes()}`,
      //   },
      //   { productData: productData },
      // ])
  };
  const handleProductCost = () => {
    setProductCost(0);
    productData?.map((item) => {
      setProductCost((pre) => pre + item.SoLuong * item.GiaBan);
      return item;
    });
  };

  useEffect(()=>{
    console.log(data)
  })
  useEffect(() => {
    setServiceCost(0);
    setProductCost(0);
    status === "View" && console.log(data)
    status === "View" &&
      data?.detailService?.map((item) => {
        setServiceCost((pre) => pre + item.GiaTien);
        return item;
      });
    status === "View" &&
      data?.detailBill?.map((item) => {
        setProductCost((pre) => pre + item.GiaBan * item.SoLuong);
        return item;
      });

    status === "Add Empty" &&
      getDataWithToken("http://localhost:8080/v1/product/", user.token).then(
        (res) => {
          console.log(res)
          setProductData(
            res.filter(item => item.An ===0).map((item) => {
              return { ...item, SoLuong: 0 };
            })
          );
        }
      );
    status === "Add" &&
      getDataWithToken(
        `http://localhost:8080/v1/service/schedule/${IdLich}`,
        user.token
      ).then((res) => {
        res.map((item) => {
          setServiceCost((pre) => pre + item.GiaTien);
          return item;
        });
        setServiceBooking(res);
      });

    status === "Add" &&
      getDataWithToken("http://localhost:8080/v1/product/", user.token).then(
        (res) => {
          console.log(res)
          setProductData(
          
            res.filter(item => item.An ===0).map((item) => {
              return { ...item, SoLuong: 0 };
            })
          );
        }
      );
  }, []);
  function removeVietnameseTones(str) {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
   
    str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
   
    str = str.replace(/ + /g, " ");
    str = str.trim();
    
    str = str.replace(
      /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
      " "
    );
    return str;
  }
  const handleExportBill = (data)=>{
    console.log(data)
    const doc = new jsPDF({ filters: ["ASCIIHexEncode"] });
    
    doc.setFontSize(20)
    doc.text("HOA DON", 90, 10);
    doc.setFontSize(13)
    doc.text(`Ngay tao hoa don: ${data.NgayTaoHoaDon.slice(0,10)}`,10,20)
    doc.text(`Gio tao hoa don:  ${data.GioTaoHoaDon.slice(11, 19)}`, 10, 30);
    doc.text(`Dich vu:`, 10, 40);
    let y = 40;
    doc.setFontSize(10);
    data?.detailService?.map((item)=>{
      doc.text(`${removeVietnameseTones(item?.TenDichVu)}`, 40, y);
      doc.text(`${item?.GiaTien.toLocaleString()}`, 90, y);
      y+=10
    })
     doc.setFontSize(13);
     doc.text(`San pham:`, 10, y);
     doc.setFontSize(10);
    data?.detailBill?.filter((item)=>{
        return item.SoLuong >0
    }).map((item) => {
      doc.text(`${removeVietnameseTones(item?.TenSanPham)}`, 40, y);
      doc.text(`${item?.GiaBan.toLocaleString()} * ${item?.SoLuong}`, 90, y);
      y += 10;
    });
    y+=10
    doc.setFontSize(13);
    doc.text(`Tong tien:  ${data.TongTien.toLocaleString()}`, 10, y);
    doc.save("bill.pdf");
  }
  return (
    <div
      onClick={(e) => {
        setModal(false);
      }}
      className="fixed top-0 right-0 left-0 bottom-0 bg-black/10 z-50 flex items-center justify-center"
    >
      <form
        onSubmit={handleSubmit}
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="w-[900px] flex flex-col bg-gray-200 rounded relative border border-black "
      >
        <div
          onClick={() => {
            setModal(false);
          }}
          className=" absolute top-0 right-0 font-bold text-xl w-[25px] h-[30px] bg-red-400 rounded-tr text-white text-center"
        >
          x
        </div>
        <div className="text-xl font-bold mt-5 text-center mb-5">
          {status === "Add" && "Tạo"} Hóa Đơn
        </div>
        {status === "View" && (
          <>
            <div className={`grid grid-cols-2`}>
              <div>
                <div class="w-full px-4 mb-3">
                  <label className="ml-4 " for="IdLich">
                    Id Hóa Đơn
                  </label>

                  <input
                    type="text"
                    name="IdLich"
                    id="IdLich"
                    readOnly
                    value={data.IdHoaDon}
                    class="w-full py-3 pl-8 pr-10 mt-2 bg-white rounded-2xl hover:ring-1 outline-blue-500"
                  />
                </div>

                <div class="w-full px-4 mb-3">
                  <label className="ml-4 " for="Description">
                    Dịch vụ
                  </label>

                  <div class="w-full h-[140px] grid grid-cols-1 overflow-y-auto overflow-hidden py-2 pl-8 pr-10 mt-2 bg-white rounded-2xl hover:ring-1 outline-blue-500">
                    {data?.detailService?.map((item, index) => {
                      return (
                        <div key={index} className="grid grid-cols-2 mb-1">
                          <div>{item.TenDichVu}</div>
                          <div>{item.GiaTien.toLocaleString()}</div>
                        </div>
                      );
                    })}
                    <div className="grid grid-cols-2 border-t">
                      <div>Tổng:</div>
                      <div>{serviceCost.toLocaleString()} VND</div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div class="w-full px-4 mb-3">
                  <label className="ml-4 " for="IdLich">
                    Ngày Tạo Hóa Đơn
                  </label>

                  <input
                    type="text"
                    name="IdLich"
                    id="IdLich"
                    readOnly
                    value={data?.NgayTaoHoaDon.slice(0, 10)}
                    class="w-full py-3 pl-8 pr-10 mt-2 bg-white rounded-2xl hover:ring-1 outline-blue-500"
                  />
                </div>
                <div class="w-full px-4 mb-3">
                  <label className="ml-4 " for="Description">
                    Sản Phẩm Bán Kèm
                  </label>

                  <div class="w-full h-[140px] grid grid-cols-1 overflow-y-auto overflow-hidden py-2 pl-8 pr-10 mt-2 bg-white rounded-2xl hover:ring-1 outline-blue-500">
                    {data?.detailBill
                      ?.filter((item) => {
                        return item.SoLuong > 0;
                      })
                      .map((item, index) => {
                        return (
                          <div key={index} className="grid grid-cols-2 mb-1">
                            <div>{item.TenSanPham}</div>
                            <div>
                              {item.SoLuong} * {item.GiaBan.toLocaleString()}
                            </div>
                          </div>
                        );
                      })}
                    <div className="grid grid-cols-2 border-t">
                      <div>Tổng:</div>
                      <div>{productCost.toLocaleString()} VND</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 justify-end w-full px-4 mb-3 ">
              <div></div>
              <div className="pl-12">
                {" "}
                Tổng Hóa Đơn: {(productCost + serviceCost).toLocaleString()} VND
              </div>
            </div>
          </>
        )}
        {status === "Add Empty" && (
          <>
            <div className={`grid grid-cols-1`}>
              <div>
                <div class="w-full px-4 mb-3">
                  <label className="ml-4 " for="Description">
                    Sản Phẩm Bán Kèm
                  </label>

                  <div class="w-full h-[300px] grid grid-cols-1 overflow-y-auto overflow-hidden py-2 pl-8 pr-10 mt-2 bg-white rounded-2xl hover:ring-1 outline-blue-500">
                    {productData?.map((item, index) => {
                      console.log(productData);
                      return (
                        <div key={index} className="grid grid-cols-2 mb-1">
                          <div className="flex items-center">
                            {item.TenSanPham}:
                          </div>
                          <div>
                            {item.SoLuongNhap ? (
                              <>
                                <input
                                  name={item.IdSanPham}
                                  className="border p-2 outline-blue-500 rounded-lg"
                                  value={item.SoLuong}
                                  min={0}
                                  onChange={(e) => {
                                    const temp = [...productData];
                                    temp[index].SoLuong = +e.target.value;
                                    setProductData(temp);
                                    setError();
                                    setMessage();
                                    handleProductCost();

                                    if (
                                      +e.target.value +
                                        item?.SoLuongDaBan.SoLuongDaBan >
                                      item.SoLuongNhap.SoLuongNhap
                                    ) {
                                      setError(
                                        `Số lượng ${
                                          item.TenSanPham
                                        } còn tối đa ${
                                          item.SoLuongNhap.SoLuongNhap -
                                          item?.SoLuongDaBan.SoLuongDaBan
                                        }`
                                      );
                                    }
                                  }}
                                  type="number"
                                />
                                * {item.GiaBan.toLocaleString()}
                              </>
                            ) : (
                              <p className=" py-1">Hết Hàng</p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                    <div className="grid grid-cols-2 border-t">
                      <div className=" pt-4">Tổng:</div>
                      <div className=" pt-4 px-2">
                        {productCost.toLocaleString()} VND
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 justify-end w-full px-4 mb-3 ">
              <div></div>
              <div className="pl-12">
                {" "}
                Tổng Hóa Đơn: {(productCost + serviceCost).toLocaleString()} VND
              </div>
            </div>
          </>
        )}
        {status === "Add" && (
          <div>
            <div className="grid grid-cols-2">
              <div>
                <div class="w-full px-4 mb-3">
                  <label className="ml-4 ">Người Đặt</label>
                  <div className="flex gap-2 items-center justify-start py-3 pl-8 pr-10 mt-2 bg-white  rounded-2xl hover:ring-1 ">
                    <img
                      className="w-[20px] h-[20px] rounded-full border "
                      src={
                        lichDatData.AvatarKH
                          ? lichDatData.AvatarKH
                          : "https://t3.ftcdn.net/jpg/00/64/67/80/360_F_64678017_zUpiZFjj04cnLri7oADnyMH0XBYyQghG.jpg"
                      }
                      alt=""
                    />
                    <p>{lichDatData.HoTenKH}</p>
                  </div>
                </div>

                <div class="w-full px-4 mb-3">
                  <label className="ml-4 ">Ngày Cắt</label>

                  <div className="flex gap-2 items-center justify-start py-3 pl-8 pr-10 mt-2 bg-white  rounded-2xl  hover:ring-1 ">
                    <p>{lichDatData.NgayCat.slice(0, 10)}</p>
                  </div>
                </div>
                <div class="w-full px-4 mb-3">
                  <label className="ml-4 " for="Description">
                    Dịch vụ
                  </label>

                  <div class="w-full h-[140px] grid grid-cols-1 overflow-y-auto overflow-hidden py-2 pl-8 pr-10 mt-2 bg-white rounded-2xl hover:ring-1 outline-blue-500">
                    {serviceBooking?.map((item, index) => {
                      return (
                        <div key={index} className="grid grid-cols-2 mb-1">
                          <div>{item.TenDichVu}</div>
                          <div>{item.GiaTien.toLocaleString()}</div>
                        </div>
                      );
                    })}
                    <div className="grid grid-cols-2 border-t">
                      <div className="pt-4">Tổng:</div>
                      <div className="pt-4">
                        {serviceCost.toLocaleString()} VND
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div class="w-full px-4 mb-3">
                  <label className="ml-4 ">Thợ Cắt Tóc</label>
                  <div className="flex gap-2 items-center justify-start py-3 pl-8 pr-10 mt-2 bg-white  rounded-2xl  hover:ring-1 ">
                    <img
                      className="w-[20px] h-[20px] rounded-full border "
                      src={
                        lichDatData.AvatarNV
                          ? lichDatData.AvatarNV
                          : "https://t3.ftcdn.net/jpg/00/64/67/80/360_F_64678017_zUpiZFjj04cnLri7oADnyMH0XBYyQghG.jpg"
                      }
                      alt=""
                    />
                    <p>{lichDatData.HoTenNV}</p>
                  </div>
                </div>

                <div class="w-full px-4 mb-3">
                  <label className="ml-4 ">Giờ cắt</label>

                  <div className="flex gap-2 items-center justify-start py-3 pl-8 pr-10 mt-2 bg-white  rounded-2xl  hover:ring-1 ">
                    <p>{lichDatData.GioCat}</p>
                  </div>
                </div>
                <div class="w-full px-4 mb-3">
                  <label className="ml-4 " for="Description">
                    Sản Phẩm Bán Kèm
                  </label>

                  <div class="w-full h-[200px] grid grid-cols-1 overflow-y-auto overflow-hidden py-2 pl-8 pr-10 mt-2 bg-white rounded-2xl hover:ring-1 outline-blue-500">
                    {productData?.map((item, index) => {
                      return (
                        <div key={index} className="grid grid-cols-2 mb-1">
                          <div className="flex items-center">
                            {item.TenSanPham}:
                          </div>
                          <div>
                            {item.SoLuongNhap ? (
                              <>
                                {" "}
                                <input
                                  name={item.IdSanPham}
                                  className="border p-2 outline-blue-500 rounded-lg w-[60px]"
                                  value={item.SoLuong}
                                  min={0}
                                  onChange={(e) => {
                                    const temp = [...productData];

                                    temp[index].SoLuong = +e.target.value;
                                    setProductData(temp);
                                    setError();
                                    setMessage();
                                    // setProductCost(
                                    //   (pre) => pre + e.target.value * item.GiaBan
                                    // );
                                    handleProductCost();

                                    if (
                                      +e.target.value +
                                        item?.SoLuongDaBan.SoLuongDaBan >
                                      item.SoLuongNhap.SoLuongNhap
                                    ) {
                                      setError(
                                        `Số lượng ${
                                          item.TenSanPham
                                        } còn tối đa ${
                                          item.SoLuongNhap.SoLuongNhap -
                                          item?.SoLuongDaBan.SoLuongDaBan
                                        }`
                                      );
                                    }
                                  }}
                                  type="number"
                                />{" "}
                                * {item.GiaBan.toLocaleString()}{" "}
                              </>
                            ) : (
                              <p className=" py-1">Hết Hàng</p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                    <div className="grid grid-cols-2 border-t">
                      <div className="pt-4 ">Tổng:</div>
                      <div className="pt-4 px-4">
                        {productCost.toLocaleString()} VND
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 justify-end w-full px-4 mb-3 ">
              <div></div>
              <div className="pl-12">
                {" "}
                Tổng Hóa Đơn: {(productCost + serviceCost).toLocaleString()} VND
              </div>
            </div>
          </div>
        )}
        {error && (
          <p className=" block text-center text-sm text-red-900 ">{error}</p>
        )}
        {message && (
          <p className=" block text-center text-sm text-green-900 ">
            {message}
          </p>
        )}
        {status !== "View" && (
          <div class="w-full px-8 mt-3 pb-2 flex items-center justify-center">
            <button
              type="submit"
              class=" py-2 bg-[#194284] w-1/2 rounded-2xl text-blue-50 text-[20px] font-semibold hover:opacity-75"
            >
              Lưu
            </button>
          </div>
        )}
        {status === "View" && (
          <div class="w-full px-8 mt-3 pb-2 flex items-center justify-center">
            <button
              onClick={()=>{handleExportBill(data)}}
              class=" py-2 bg-[#194284] w-1/2 rounded-2xl text-blue-50 text-[20px] font-semibold hover:opacity-75"
            >
              Xuất hóa đơn
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default BillModal;
