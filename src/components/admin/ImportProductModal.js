import React, { useState, useEffect } from "react";
import { getDataWithToken } from "../../utils/fetchApi";
import { useSelector } from "react-redux";

const ImportProductModal = ({ status, data, setModal }) => {
  const user = useSelector((state) => state.auth.login.currentUser);

  const [productData, setProductData] = useState([]);

  const [dateImportProduct, setDateImportProduct] = useState("");

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const [totalPrice, setTotalPrice] = useState(0);
 
  useEffect(() => {
    status !== "Add" && setDateImportProduct(data.NgayNhap);

    status === "Add" &&
      getDataWithToken("http://localhost:8080/v1/product/", user.token).then(
        (res) => {
          console.log(res);
          setProductData(
            res.filter(item => item.An ===0).map((item) => {
              return { ...item, SoLuong: 0 };
            })
          );
        }
      );

    status !== "Add" &&
      getDataWithToken(
        `http://localhost:8080/v1/import/${data.IdDonNhap}`,
        user.token
      ).then((res) => {
        console.log(res);

        let temp = 0;
        res.forEach((item) => {
          return (temp += item.SoLuong * item.GiaNhap);
        });
        setTotalPrice(temp);
        setProductData(res);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(productData);
    // console.log(data);

    if (
      productData.some((item) => {
        return +item.SoLuong > 0;
      }) &&
      dateImportProduct
    ) {
      status === "Edit" &&
        (await fetch(`http://localhost:8080/v1/import/${data.IdDonNhap}`, {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            token: `${user.token}`,
          },
          body: JSON.stringify([
            { dateImportProduct: dateImportProduct },
            [...productData],
          ]),
        }).then((res) => {
          console.log(res);
          res.ok && setMessage("Updated successfully");
          !res.ok && setError("Error");
          //setModal(false);
        }));

      status === "Add" &&
        (await fetch(`http://localhost:8080/v1/import/`, {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            token: `${user.token}`,
          },
          body: JSON.stringify([
            { dateImportProduct: dateImportProduct },
            [...productData],
          ]),
        }).then((res) => {
          console.log(res);
          res.ok && setMessage("Add successfully");
          !res.ok && setError("Error");
          // setModal(false);
        }));
    } else {
      setError("Số lượng sản phẩm phải lớn hơn 0.");
      !dateImportProduct && setError("Vui lòng chọn ngày nhập.");
    }
    // try {
    //   if (
    //     !serviceData.TenDichVu ||
    //     !serviceData.ThoiGian ||
    //     !serviceData.TienCongNhanVien
    //   ) {
    //     setError(
    //       "Không được để trống Tên dịch vụ, Thời gian hoàn thành, Tiền công trả cho nhân viên"
    //     );
    //   } else {
    //     status === "Add" &&
    //       (await fetch("http://localhost:8080/v1/service/", {
    //         method: "post",
    //         headers: {
    //           "Content-Type": "application/json",
    //           token: `${user.token}`,
    //         },
    //         body: JSON.stringify(serviceData),
    //       })
    //         .then((res) => res.json())
    //         .then((res) => {
    //           setMessage(res.message);
    //           setError(res.error);
    //         }));

    //     //   status === "Edit" &&
    //     //     (await fetch(`http://localhost:8080/v1/service/${id}`, {
    //     //       method: "post",
    //     //       headers: {
    //     //         "Content-Type": "application/json",
    //     //         "token": `${user.token}`
    //     //       },
    //     //       body: JSON.stringify(serviceData),
    //     //     })
    //     //       .then((res) => res.json())
    //     //       .then((res) => {
    //     //         setMessage(res.message);
    //     //         setError(res.error);
    //     //       }));
    //     setModal(false);
    //   }
    // } catch (error) {}
  };
  return (
    <div
      onClick={() => {
        setModal(false);
      }}
      className="fixed top-0 right-0 left-0 bottom-0 bg-black/10 z-50 flex items-center justify-center"
    >
      <form
        onClick={(e) => {
          e.stopPropagation();
        }}
        onSubmit={handleSubmit}
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
          {status === "Add" && "Thêm "}Thông Tin Nhập Hàng
        </div>
        <div className="grid grid-cols-2">
          <div>
            {status === "View" && (
              <div class="w-full px-4 mb-3">
                <label className="ml-4 " for="IdDonNhap">
                  Id Đơn Nhập
                </label>

                <div className="flex gap-2 items-center justify-start py-3 pl-8 pr-10 mt-2 bg-white  rounded-2xl  hover:ring-1 ">
                  <p>{data.IdDonNhap}</p>
                </div>
              </div>
            )}
            <div class="w-full px-4 mb-3">
              <label className="ml-4 " for="TenDichVu">
                Ngày Nhập <span className="text-[red]">*</span>
              </label>

              {status !== "Add" && (
                <input
                  type="date"
                  class="w-full py-3 pl-8 pr-10 mt-2 bg-white  rounded-2xl hover:ring-1 outline-blue-500"
                  readOnly={status === "View" ? true : false}
                  value={dateImportProduct.slice(0, 10)}
                  onChange={(e) => {
                    setDateImportProduct(e.target.value);
                    setError();
                    setMessage();
                  }}
                />
              )}
              {status === "Add" && (
                <input
                  type="date"
                  class="w-full py-3 pl-8 pr-10 mt-2 bg-white  rounded-2xl hover:ring-1 outline-blue-500"
                  onChange={(e) => {
                    setDateImportProduct(e.target.value);
                    setError();
                    setMessage();
                  }}
                />
              )}
            </div>
          </div>
          <div>
            <div class="w-full px-4 mb-3">
              <label className="ml-4 " for="Avatar">
                Đơn Hàng <span className="text-[red]">*</span>
              </label>
              <div className="py-3 pl-8 pr-10 mt-2 bg-white  rounded-2xl hover:ring-1  h-[320px] overflow-y-auto outline-blue-500">
                {productData?.map((item, index) => {
                  return (
                    <>
                      {status !== "View" && (
                        <div className="flex flex-wrap justify-center item-center my-2">
                          <div className="w-[40%] flex items-center justify-center">
                            <p className="w-full block text-center ">
                              {item.TenSanPham}:
                            </p>
                          </div>
                          {status === "Add" && (<div className="w-[60%]">
                            <input
                              name={item.IdSanPham}
                              className="border p-2 outline-blue-500 rounded-lg w-[120px]"
                              value={item.SoLuong}
                              min={0}
                              onChange={(e) => {
                                const temp = [...productData];
                                const preQuantity = temp[index].SoLuong;

                                temp[index].SoLuong = +e.target.value;

                                setTotalPrice(
                                  (pre) =>
                                    pre +
                                    (+e.target.value - preQuantity) *
                                      item.GiaNhap
                                );
                                setProductData(temp);
                                setError();
                                setMessage();
                                //item.SoLuong = e.target.value
                              }}
                              type="number"
                            /> * {item.GiaNhap.toLocaleString()}</div>
                          )}

                          {status === "Edit" && (
                            <div className="w-[60%]">

                            <input
                              name={item.IdSanPham}
                              className="border p-2 outline-blue-500 rounded-lg w-[120px] "
                              value={item.SoLuong}
                              min={0}
                              onChange={(e) => {
                                const temp = [...productData];
                                const preQuantity = temp[index].SoLuong;

                                temp[index].SoLuong = +e.target.value;
                                setTotalPrice(
                                  (pre) =>
                                    pre +
                                    (+e.target.value - preQuantity) *
                                      item.GiaNhap
                                );
                                setProductData(temp);
                                setError();
                                setMessage();
                                //item.SoLuong = e.target.value
                              }}
                              type="number"
                            /> * {item.GiaNhap.toLocaleString()}
                            </div>
                          )
                          }
                        </div>
                      )}
                      {status === "View" && item.SoLuong > 0 && (
                        <div className="flex flex-wrap justify-center item-center my-2">
                          <div className="flex w-[40%] items-center justify-center">
                            <p className="w-full block text-center ">
                              {item.TenSanPham}:
                            </p>
                          </div>

                          {<div  className="w-[60%]">
                            <input
                              name={item.IdSanPham}
                              className="border p-2 outline-blue-500 rounded-lg w-[120px]"
                              value={item.SoLuong}
                              onChange={() => {}}
                              readOnly
                              type="number"
                            /> * {item.GiaNhap.toLocaleString()} 
                         </div> }
                        </div>
                      )}
                    </>
                  );
                })}{" "}
              </div>
              <div className="mt-2 ml-4">Tổng Tiền: {totalPrice.toLocaleString()} VND</div>
            </div>
          </div>
        </div>
        {error && (
          <p className="block text-center text-sm text-red-900">{error}</p>
        )}
        {message && (
          <p className="block text-center text-sm text-green-900">{message}</p>
        )}
        {status !== "View" ? (
          <div class="w-full px-8 mt-3 pb-2 flex items-center justify-center">
            <button
              onClick={handleSubmit}
              type="submit"
              class=" py-2 bg-[#194284] w-1/2 rounded-2xl text-blue-50 text-[20px] font-semibold hover:opacity-75"
            >
              Lưu
            </button>
          </div>
        ) : (
          <></>
        )}
      </form>
    </div>
  );
};

export default ImportProductModal;
