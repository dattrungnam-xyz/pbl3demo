import React from "react";
// import { Link } from "react-router-dom";
import { UserNavbar } from "../components";

const Booking = () => {
  return (
    <>
      <UserNavbar />
      <div className="bg-gray-10 mt-[62px] items-center justify-center  overflow-y-auto">
        <div class="w-full h-full max-sm:pt-4 pt-12 max-sm:pb-4 pb-8 md:px-10 px-4 flex flex-row max-sm:flex-col  ">
          <div className="w-1/2 max-sm:w-full">
            <div class="w-3/4 mb-4 ">
              <label className="ml-4 ">Thợ cắt tóc</label>
              <select
                className="w-full py-3 mt-2 pl-7 pr-3 bg-slate-200  rounded-2xl hover:ring-1 outline-blue-500"
                placeholder="Chọn thợ cắt tóc"
              >
                <option value="Nguyễn Văn A">Nguyễn Văn A</option>
                <option value="Nguyễn Văn B">Nguyễn Văn B</option>
                <option value="Nguyễn Văn C">Nguyễn Văn C</option>
                <option value="Nguyễn Văn D">Nguyễn Văn D</option>
              </select>
            </div>

            <div class="w-3/4 mb-4 ">
              <label className="ml-4 ">Chọn ngày cắt</label>
              <div>
                <input
                  className="w-full py-3 mt-2 pl-7 pr-3 bg-slate-200  rounded-2xl hover:ring-1 outline-blue-500"
                  type="date"
                />
              </div>
            </div>

            <div class="w-3/4 mb-4 ">
              <label className="ml-4 ">Chọn giờ cắt</label>
              <select
                className="w-full py-3 mt-2 pl-7 pr-3 bg-slate-200  rounded-2xl hover:ring-1 outline-blue-500"
                id="cars"
                placeholder="Chọn thợ cắt tóc"
              >
                <option value="15:00">15:00</option>
                <option value="15:30">15:30</option>
                <option value="16:00">16:00</option>
                <option value="16:30">16:30</option>
              </select>
            </div>
          </div>
          <div className="w-1/2 max-sm:w-full">
            <div class="w-full ">
              <label className="ml-4 ">Chọn dịch vụ</label>
              <div className="grid grid-cols-2 grid-rows-2 gap-2 h-[160px] mt-2">
                <div className="col-start-1 col-end-2 row-start-1 row-end-2 bg-slate-200  border-[2px] border-blue-500 rounded  flex items-center justify-center cursor-pointer font-semibold text-md">
                  Cắt Tóc
                </div>
                <div className="col-start-2 col-end-3 row-start-1 row-end-2 bg-slate-200 border rounded  flex items-center justify-center cursor-pointer font-semibold text-md">
                  Uốn Tóc
                </div>
                <div className="col-start-1 col-end-2 row-start-2 row-end-3 bg-slate-200 border-[2px] border-blue-500 rounded flex items-center justify-center cursor-pointer font-semibold text-md">
                  Nhuộm Tóc
                </div>
                <div className="col-start-2 col-end-3 row-start-2  row-end-3 bg-slate-200 border-[2px] border-blue-500 rounded flex items-center justify-center cursor-pointer font-semibold text-md">
                  Tatoo Hair
                </div>
              </div>
            </div>
            <div class="w-full mt-4">
              <label className="ml-4 ">Chọn dịch vụ phụ</label>
              <div className="grid grid-cols-2 grid-rows-2 gap-2 h-[160px] mt-2">
                <div className="col-start-1 col-end-2 row-start-1 row-end-2 bg-slate-200  border-[2px] border-blue-500 rounded  flex items-center justify-center cursor-pointer font-semibold text-md">
                  Cắt Tóc
                </div>
                <div className="col-start-2 col-end-3 row-start-1 row-end-2 bg-slate-200 border-[2px] border-blue-500 rounded  flex items-center justify-center cursor-pointer font-semibold text-md">
                  Uốn Tóc
                </div>
                <div className="col-start-1 col-end-2 row-start-2 row-end-3 bg-slate-200 border-[2px] border-blue-500 rounded flex items-center justify-center cursor-pointer font-semibold text-md">
                  Nhuộm Tóc
                </div>
                <div className="col-start-2 col-end-3 row-start-2  row-end-3 bg-slate-200 border-[2px] border-blue-500 rounded flex items-center justify-center cursor-pointer font-semibold text-md">
                  Tatoo Hair
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class=" flex w-full mb-6 items-center justify-center">
          <button
            type="submit"
            class="max-sm:w-3/4 w-[280px] py-2 bg-[#194284]  rounded-2xl text-blue-50 text-[20px] font-semibold hover:opacity-75"
          >
            Đặt lịch
          </button>
        </div>
      </div>
    </>
  );
};

export default Booking;
