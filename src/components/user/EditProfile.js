import React from "react";

const EditProfile = () => {
  return (
    <>
      <section className="mt-[60px] h-[calc(100vh-60px)] flex items-center justify-center">
        <div class="flex flex-col justify-center h-full w-[800px]  items-center">
          <div className="flex justify-around mb-4 ">
            <p className="font-bold text-2xl">Chỉnh sửa thông tin</p>
            
          </div>
          <form class="w-full md:w-1/2 flex flex-col items-center pt-2">
            <div class="w-3/4 mb-4">
              <label className="ml-4 " for="username">
                Tên đăng nhập
              </label>
              <input
                type="text"
                name="username"
                id="username"
                class="w-full py-3 pl-8 pr-10 mt-2 bg-slate-200  rounded-2xl hover:ring-1 outline-blue-500"
              />
            </div>

            <div class="w-3/4 mb-4">
              <label className="ml-4 " for="name">
                Họ tên
              </label>
              <input
                type="text"
                name="name"
                id="name"
                class="w-full py-3 pl-8 pr-10 mt-2 bg-slate-200  rounded-2xl hover:ring-1 outline-blue-500"
              />
            </div>
            <div class="w-3/4 mb-4">
              <label className="ml-4 " for="phone">
                Số điện thoại
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                class="w-full py-3 pl-8 pr-10 mt-2 bg-slate-200  rounded-2xl hover:ring-1 outline-blue-500"
              />
            </div>
            
            <div class="w-3/4 mt-6">
              <button
                type="submit"
                class=" py-2 bg-[#194284] w-full rounded-2xl text-blue-50 text-[20px] font-semibold hover:opacity-75"
              >
                Lưu
              </button>
            </div>
           
          </form>
        </div>
      </section>
    </>
  );
};

export default EditProfile;
