import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const StaffModal = ({ status, setModal, data, IdNhanVien }) => {
  const user = useSelector((state) => state.auth.login.currentUser);
  const [error, setError] = useState();
  const [message, setMessage] = useState();
  const [staffData, setStaffData] = useState({
   

  });
  const [registerAccount, setRegisterAccount] = useState({
    TenDangNhap: "",
    MatKhau: "",
    LoaiTaiKhoan: "staff",
  });

  const handleSubmit = async (e) => {
    const reg = RegExp("^[0-9]+$");
    e.preventDefault();
    if (
      
      staffData.HoTen?.trim() &&
      staffData.DiaChi?.trim() &&
      reg.test(staffData.SoDienThoai) &&
      reg.test(staffData.NamKinhNghiem) &&
      staffData.LoaiNhanVien &&
      staffData.NamKinhNghiem &&
      staffData.SoDienThoai?.length > 9 &&
      staffData.SoDienThoai?.length <= 11
    ) {
      status === "Edit" &&
        (await fetch("http://localhost:8080/v1/staff/", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            token: `${user.token}`,
          },
          body: JSON.stringify(staffData),
        }).then((res) => {
          res.ok && setMessage("Cập nhật thông tin thành công");
        }));


        const reg = RegExp("^[0-9]+$");
        let pattern = /\s/g;


 
  

        status === "Add" && registerAccount.TenDangNhap && registerAccount.MatKhau && registerAccount.MatKhau.length >5 && !registerAccount.MatKhau.match(pattern)&&!registerAccount.TenDangNhap.match(pattern)&&
        (await fetch("http://localhost:8080/v1/auth/register/staff", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            token: `${user.token}`,
          },
          body: JSON.stringify({...registerAccount,...staffData}),
        }).then((res) => {
          console.log(res)
          res.ok && setMessage("Thêm nhân viên thành công");
          !res.ok&& setError("Tên đăng nhập đã tồn tại trong hệ thống")
        }));

        status === "Add" && registerAccount.MatKhau.length < 6 && setError("Mật khẩu phải dài hơn 6 kí tự")
        status === "Add" && registerAccount.MatKhau.match(pattern)&& setError("Mật khẩu không được chứa khoảng trắng")
        status === "Add" &&registerAccount.TenDangNhap.match(pattern) && setError("Tên đăng nhập không được chứa khoảng trắng")

    } else {
      let pattern = /\s/g;
      setError("Không được để trống thông tin.");
      if (!reg.test(staffData.NamKinhNghiem)&&staffData.NamKinhNghiem)
        setError("Sai định dạng năm kinh nghiệm");
     
      !reg.test(staffData.SoDienThoai)&&staffData.SoDienThoai?.length > 0 && setError("Sai định dạng số điện thoại")
      !(staffData.SoDienThoai?.length > 9&& staffData.SoDienThoai?.length <= 11)&& setError("Số điện thoại phải từ 10-11 kí tự")
      
    }


  
    // if (
    //   status === "Add" &&
    //   registerAccount.TenDangNhap &&
    //   registerAccount.MatKhau
    // ) {
    //   //add account  logic
    // } else {
    //   setError("Không được để trống thông tin.");
    // }

    console.log({...registerAccount,...staffData})
    // setModal(false)
  };

  useEffect(() => {
    if (status === "View" || status === "Edit") {
      const staffInfor = data.filter((item) => {
        return item.IdNhanVien === IdNhanVien;
      });
      setStaffData(staffInfor[0]);
    }
    if (status === "Add" ) {
      
      setStaffData({
        DiaChi:"",
        HoTen:"",
        LoaiNhanVien:"1",
        NamKinhNghiem:"",
        SoDienThoai:""
      });
    }
  }, []);
  return (
    // <div className='fixed bg-black/20 w-full h-full z-30'>

    // </div>

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
        className="w-[700px] flex flex-col bg-gray-200 rounded relative border border-black "
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
          {status === "Add" && "Thêm"} Nhân Viên
        </div>
        <div className="grid grid-cols-2">
          <div>
            <div class="w-full px-4 mb-3">
              <label className="ml-4 " for="username">
                Họ Tên <span className="text-[red]">*</span>
              </label>

              <input
                type="text"
                name="HoTen"
                id="HoTen"
                autocomplete="off"
                readOnly={status === "View" ? true : false}
                value={staffData?.HoTen}
                onChange={(e) => {
                  setStaffData({
                    ...staffData,
                    [e.target.name]: e.target.value,
                  });
                  setError();
                  setMessage();
                }}
                class="w-full py-3 pl-8 pr-10 mt-2 bg-white rounded-2xl hover:ring-1 outline-blue-500"
              />
            </div>
            {status === "Add" && (
              <>
                <div class="w-full px-4 mb-3">
                  <label className="ml-4 " for="TenDangNhap">
                    Tên Đăng Nhập <span className="text-[red]">*</span>
                  </label>

                  <input
                    type="text"
                    name="TenDangNhap"
                    id="TenDangNhap"
                    autocomplete="off"
                    value={registerAccount.TenDangNhap}
                    onChange={(e) => {
                      setRegisterAccount({
                        ...registerAccount,
                        [e.target.name]: e.target.value,
                      });
                      setError();
                      setMessage();
                    }}
                    class="w-full py-3 pl-8 pr-10 mt-2 bg-white  rounded-2xl hover:ring-1 outline-blue-500"
                  />
                </div>
                <div class="w-full px-4 mb-3">
                  <label className="ml-4 " for="MatKhau">
                    Mật Khẩu <span className="text-[red]">*</span>
                  </label>

                  <input
                    type="text"
                    name="MatKhau"
                    id="MatKhau"
                    autocomplete="off"
                    value={registerAccount.MatKhau}
                    onChange={(e) => {
                      setRegisterAccount({
                        ...registerAccount,
                        [e.target.name]: e.target.value,
                      });
                      setError();
                      setMessage();
                    }}
                    class="w-full py-3 pl-8 pr-10 mt-2 bg-white  rounded-2xl hover:ring-1 outline-blue-500"
                  />
                </div>

                <div class="w-full px-4 mb-3">
                  <label className="ml-4 " for="username">
                    Loại Tài Khoản <span className="text-[red]">*</span>
                  </label>

                  <select className="w-full py-3 mt-2 pl-7 pr-3 bg-white  rounded-2xl hover:ring-1 outline-blue-500">
                    <option selected value="staff">
                      Nhân viên
                    </option>
                  </select>
                </div>
              </>
            )}
            {status !== "Add" && (
              <>
                <div class="w-full px-4 mb-3">
                  <label className="ml-4 " for="SoDienThoai">
                    Số Điện Thoại <span className="text-[red]">*</span>
                  </label>

                  <input
                    type="text"
                    name="SoDienThoai"
                    id="SoDienThoai"
                    autocomplete="off"
                    value={staffData?.SoDienThoai}
                    readOnly={status === "View" ? true : false}
                    onChange={(e) => {
                      setStaffData({
                        ...staffData,
                        [e.target.name]: e.target.value,
                      });
                      setError();
                      setMessage();
                    }}
                    class="w-full py-3 pl-8 pr-10 mt-2 bg-white rounded-2xl hover:ring-1 outline-blue-500"
                  />
                </div>
                <div class="w-full px-4 mb-3">
                  <label className="ml-4 ">Loại Nhân Viên <span className="text-[red]">*</span></label>

                  <select
                    name="LoaiNhanVien"
                    onChange={(e) => {
                      setStaffData({
                        ...staffData,
                        [e.target.name]: e.target.value,
                      });
                      setError();
                      setMessage();
                    }}
                    className="w-full py-3 mt-2 pl-7 pr-3 bg-white  rounded-2xl hover:ring-1 outline-blue-500"
                  >
                    <option
                  
                      selected={staffData.LoaiNhanVien === "1" ? true : false}
                      disabled={
                        staffData.LoaiNhanVien === "2" && status === "View"
                      }
                      hidden={
                        staffData.LoaiNhanVien === "2" && status === "View"
                      }
                      value="1"
                    
                    >
                      Thợ cắt tóc
                    </option>
                    <option
                    
                      selected={staffData.LoaiNhanVien === "2" ? true : false}
                      disabled={
                        staffData.LoaiNhanVien === "1" && status === "View"
                      }
                      hidden={
                        staffData.LoaiNhanVien === "1" && status === "View"
                      }
                      value="2"
                    >
                      Kế toán
                    </option>
                  </select>
                </div>
              </>
            )}
          </div>
          <div>
            {status === "Add" && (
              <>
                <div class="w-full px-4 mb-3">
                  <label className="ml-4 " for="SoDienThoai">
                    Số Điện Thoại <span className="text-[red]">*</span>
                  </label>

                  <input
                    type="text"
                    name="SoDienThoai"
                    id="SoDienThoai"
                    autocomplete="off"
                    readOnly={status === "View" ? true : false}
                    onChange={(e) => {
                      setStaffData({
                        ...staffData,
                        [e.target.name]: e.target.value,
                      });
                      setError();
                      setMessage();
                    }}
                    class="w-full py-3 pl-8 pr-10 mt-2 bg-white rounded-2xl hover:ring-1 outline-blue-500"
                  />
                </div>
                <div class="w-full px-4 mb-3">
                  <label className="ml-4 ">Loại Nhân Viên <span className="text-[red]">*</span></label>

                  <select
                  name="LoaiNhanVien"
                    onChange={(e) => {
                      setStaffData({
                        ...staffData,
                        [e.target.name]: e.target.value,
                      });
                      setError();
                      setMessage();
                    }}
                    className="w-full py-3 mt-2 pl-7 pr-3 bg-white  rounded-2xl hover:ring-1 outline-blue-500"
                  >
                    <option selected value="1">
                      Thợ cắt tóc 
                    </option>
                    <option value="2">Kế toán</option>
                  </select>
                </div>
              </>
            )}

            {/* <div class="w-full px-4 mb-3">
              <label className="ml-4 " htmlfor="Luong1Gio">
                Lương 1 giờ
              </label>

              <input
                type="text"
                name="Luong1Gio"
                id="Luong1Gio"
                value={staffData.Luong1Gio}
                class="w-full py-3 pl-8 pr-10 mt-2 bg-white rounded-2xl hover:ring-1 outline-blue-500"
              />
            </div> */}

            <div class="w-full px-4 mb-3">
              <label className="ml-4 " htmlfor="DiaChi">
                Địa Chỉ <span className="text-[red]">*</span>
              </label>

              <input
                type="text"
                name="DiaChi"
                id="DiaChi"
                autocomplete="off"
                value={staffData?.DiaChi}
                onChange={(e) => {
                  setStaffData({
                    ...staffData,
                    [e.target.name]: e.target.value,
                  });
                  setError();
                  setMessage();
                }}
                readOnly={status === "View" ? true : false}
                class="w-full py-3 pl-8 pr-10 mt-2 bg-white rounded-2xl hover:ring-1 outline-blue-500"
              />
            </div>
            <div class="w-full px-4 mb-3">
              <label className="ml-4 " for="NamKinhNghiem">
                Năm Kinh Nghiệm <span className="text-[red]">*</span>
              </label>

              <input
                type="text"
                name="NamKinhNghiem"
                id="NamKinhNghiem"
                autocomplete="off"
                value={staffData?.NamKinhNghiem}
                onChange={(e) => {
                  setStaffData({
                    ...staffData,
                    [e.target.name]: e.target.value,
                  });
                  setError();
                  setMessage();
                }}
                readOnly={status === "View" ? true : false}
                class="w-full py-3 pl-8 pr-10 mt-2 bg-white rounded-2xl hover:ring-1 outline-blue-500"
              />
            </div>

            {status !== "Add" && (
              <div class="w-full px-4 mb-3">
                <label className="ml-4 " for="SaoTrungBinh">
                  Sao Trung Bình
                </label>

                <input
                  type="text"
                  name="SaoTrungBinh"
                  id="SaoTrungBinh"
                  value={
                    staffData?.TongSoLuotDanhGia?.SoLuotDanhGia
                      ? `${(
                          staffData.TongSoSao.TongSoSao /
                          staffData.TongSoLuotDanhGia.SoLuotDanhGia
                        ).toFixed(2)}`
                      : "0"
                  }
                  onChange={(e) => {}}
                  readOnly
                  class="w-full cursor-default bg-gray-100 py-3 pl-8 pr-10 mt-2  rounded-2xl hover:ring-1 outline-blue-500"
                />
              </div>
            )}
          </div>
        </div>
        {error && (
          <p className=" block text-center text-sm text-red-900 ">{error}</p>
        )}
        {message && !error &&(
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
      </form>
    </div>
  );
};

export default StaffModal;
