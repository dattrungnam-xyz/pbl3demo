import React from "react";
// import { Link } from "react-router-dom";
import { UserNavbar } from "../components";

const Booking = () => {
  return (
    <>
      <UserNavbar />
      <div className="bg-gray-10 flex items-center justify-center">
        <div class="flex justify-center h-[100vh] w-[800px] items-center">
          <div class="w-full md:w-1/2 flex flex-col items-center">
            <h1 class="text-center text-[35px] font-semibold text-gray-600 mb-12">
              Đặt lịch
            </h1>

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

            <div class="w-3/4 mb-4 ">
            <label className="ml-4 " for="username">
                Chọn thợ cắt
              </label>
              <select
                className="w-full py-3 mt-2 pl-7 pr-3 bg-slate-200  rounded-2xl hover:ring-1 outline-blue-500"
                id="cars"
                placeholder="Chọn thợ cắt tóc"
              >
                <option value="Nguyễn Văn A">Nguyễn Văn A</option>
                <option value="Nguyễn Văn B">Nguyễn Văn B</option>
                <option value="Nguyễn Văn C">Nguyễn Văn C</option>
                <option value="Nguyễn Văn D">Nguyễn Văn D</option>
              </select>
            </div>

            <div class="w-3/4 mt-6">
              <button
                type="submit"
                class=" py-2 bg-[#194284] w-full rounded-2xl text-blue-50 text-[20px] font-semibold hover:opacity-75"
              >
                Đặt lịch
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;
