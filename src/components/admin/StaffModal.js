import React, { useEffect, useState } from "react";

const StaffModal = ({ status, setModal, data, IdNhanVien }) => {
  const [staffData,setStaffData] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(()=>{
    const staffInfor = data.filter((item)=>{
      return item.IdNhanVien === IdNhanVien
    })
    setStaffData(staffInfor[0])
  })
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
                Họ Tên
              </label>

              <input
                type="text"
                name="HoTen"
                id="HoTen"
                value={staffData.HoTen}
                class="w-full py-3 pl-8 pr-10 mt-2 bg-white rounded-2xl hover:ring-1 outline-blue-500"
              />
            </div>
            {status === "Add" && (
              <>
                <div class="w-full px-4 mb-3">
                  <label className="ml-4 " for="username">
                    Tên Đăng Nhập
                  </label>

                  <input
                    type="text"
                    name="username"
                    id="username"
                    class="w-full py-3 pl-8 pr-10 mt-2 bg-white  rounded-2xl hover:ring-1 outline-blue-500"
                  />
                </div>
                <div class="w-full px-4 mb-3">
                  <label className="ml-4 " for="password">
                    Mật Khẩu
                  </label>

                  <input
                    type="text"
                    name="password"
                    id="password"
                    class="w-full py-3 pl-8 pr-10 mt-2 bg-white  rounded-2xl hover:ring-1 outline-blue-500"
                  />
                </div>

                <div class="w-full px-4 mb-3">
                  <label className="ml-4 " for="username">
                    Loại Tài Khoản
                  </label>

                  <select className="w-full py-3 mt-2 pl-7 pr-3 bg-white  rounded-2xl hover:ring-1 outline-blue-500">
                    <option selected value="admin">
                      Admin
                    </option>
                    <option value="staff">Nhân viên</option>
                  </select>
                </div>
              </>
            )}
             {
              status !== "Add" &&  <>
              <div class="w-full px-4 mb-3">
                <label className="ml-4 " for="SoDienThoai">
                  Số Điện Thoại
                </label>

                <input
                  type="text"
                  name="SoDienThoai"
                  id="SoDienThoai"
                  value={staffData.SoDienThoai}
                  class="w-full py-3 pl-8 pr-10 mt-2 bg-white rounded-2xl hover:ring-1 outline-blue-500"
                />
              </div>
              <div class="w-full px-4 mb-3">
                <label className="ml-4 " for="username">
                  Loại Nhân Viên
                </label>

                <select className="w-full py-3 mt-2 pl-7 pr-3 bg-white  rounded-2xl hover:ring-1 outline-blue-500">
                  <option selected value="1">
                    Thợ cắt tóc
                  </option>
                  <option value="2">Kế toán</option>
                </select>
              </div>
            </>
            }
          </div>
          <div>
            {
              status === "Add" &&  <>
              <div class="w-full px-4 mb-3">
                <label className="ml-4 " for="username">
                  Số Điện Thoại
                </label>

                <input
                  type="text"
                  name="username"
                  id="username"
                  class="w-full py-3 pl-8 pr-10 mt-2 bg-white rounded-2xl hover:ring-1 outline-blue-500"
                />
              </div>
              <div class="w-full px-4 mb-3">
                <label className="ml-4 " for="username">
                  Loại Nhân Viên
                </label>

                <select className="w-full py-3 mt-2 pl-7 pr-3 bg-white  rounded-2xl hover:ring-1 outline-blue-500">
                  <option selected value="admin">
                    Thợ cắt tóc
                  </option>
                  <option value="staff">Kế toán</option>
                </select>
              </div>
            </>
            }
           

            <div class="w-full px-4 mb-3">
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
            </div>

            <div class="w-full px-4 mb-3">
              <label className="ml-4 " htmlfor="DiaChi">
                Địa Chỉ
              </label>

              <input
                type="text"
                name="DiaChi"
                id="DiaChi"
                value={staffData.DiaChi}
                class="w-full py-3 pl-8 pr-10 mt-2 bg-white rounded-2xl hover:ring-1 outline-blue-500"
              />
            </div>
            <div class="w-full px-4 mb-3">
              <label className="ml-4 " for="NamKinhNghiem">
                Năm Kinh Nghiệm
              </label>

              <input
                type="text"
                name="NamKinhNghiem"
                id="NamKinhNghiem"
                value={staffData.NamKinhNghiem}
                class="w-full py-3 pl-8 pr-10 mt-2 bg-white rounded-2xl hover:ring-1 outline-blue-500"
              />
            </div>
          </div>
        </div>

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
