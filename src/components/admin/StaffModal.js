import React from "react";

const StaffModal = () => {
  return (
    // <div className='fixed bg-black/20 w-full h-full z-30'>

    // </div>
    <div className="fixed">
      <div className="w-[600px] flex flex-col bg-gray-200 rounded relative border border-black ">
        <div className=" absolute top-0 right-0 font-bold text-xl w-[25px] h-[30px] bg-red-400 rounded-tr text-white text-center">
          x
        </div>
        <div className="text-xl font-bold mt-5 text-center mb-5">
          Thêm Nhân Viên
        </div>
        <div className="grid grid-cols-2">
          <div>
          <div class="w-full px-4 mb-3">
              <label className="ml-4 " for="username">
                Họ Tên
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
          </div>
          <div>
           
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
                  Admin
                </option>
                <option value="staff">Nhân viên</option>
              </select>
            </div>
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
                Địa Chỉ
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
                Năm Kinh Nghiệm
              </label>

              <input
                type="text"
                name="username"
                id="username"
                class="w-full py-3 pl-8 pr-10 mt-2 bg-white rounded-2xl hover:ring-1 outline-blue-500"
              />
            </div>
          </div>
        </div>

        <div class="w-full px-8 mt-3 pb-2 flex items-center justify-center">
          <button
            type="submit"
            class=" py-2 bg-[#194284] w-1/2 rounded-2xl text-blue-50 text-[20px] font-semibold hover:opacity-75"
          >
            Lưu
          </button>
        </div>
      </div>
    </div>
  );
};

export default StaffModal;
