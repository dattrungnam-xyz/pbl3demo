import React from "react";

import { UserNavbar } from "../components";
const StaffCard = () => {
  return (
    <div className="flex gap-12 w-[70%] h-[100%] p-14 items-center justify-between bg-red-400 rounded">
      <div className="bg-yellow-900 border rounded-full">
        <img
          src="https://i.pinimg.com/736x/98/5a/8a/985a8a9969b2c905306125a5f9d937df.jpg"
          alt=""
          className="w-[300px] h-[300px] object-cover rounded-full"
        />
      </div>
      <div className=" flex flex-col flex-1 bg-gray-900 items-center justify-center ">
        <p className="font-bold text-2xl">Nguyễn Quốc Đạt</p>
        <p className="py-2 text-lg">0369394745</p>
        <p className="py-2 text-lg">2 Năm kinh nghiệm</p>
        <p className="py-2 text-lg">Sao trung bình</p>
        <p className="py-2 text-lg">Tổng số khách</p>
        <p className="py-2 text-lg">
        Cắt tóc chuyên nghiệp với giá 80.000 VND Tại Liem Barber Shop,
                các bạn sẽ được tư vấn tạo kiểu tóc phù hợp với khuôn mặt bởi
                các barber giàu kinh nghiệm và thân thiện, mang đến trải nghiệm
                dịch vụ chuyên nghiệp mà vẫn ấm cúng.
        </p>
      </div>
    </div>
  );
};
const ListStaffCard = () => {
  return (
    <div className="w-[30%] h-[100%] bg-yellow-400 border rounded overflow-y-auto">
      <div className=" w-full h-14 flex border-b items-center justify-center">
        <p>Danh sách nhân viên</p>
      </div>
      <div className=" h-[calc(100%-56px)] overflow-y-auto ">
        <div className="grid grid-cols-1 gap-2 px-4 py-4 w-full ">
          <div className="flex w-full h-16 p-2 gap-4 bg-red-400 items-center rounded-xl cursor-pointer">
            <img
              className="w-[46px] h-[46px] rounded-full"
              src="https://i.pinimg.com/736x/98/5a/8a/985a8a9969b2c905306125a5f9d937df.jpg"
              alt=""
            />
            <p className="text-xl"> Nguyễn văn A</p>
          </div>
        </div>
      </div>
    </div>
  );
};
const Staff = () => {
  return (
    <>
      <UserNavbar />
      <section className="flex flex-row gap-4 px-8 h-[100vh] bg-slate-500 pt-[80px] pb-5">
        <StaffCard />
        <ListStaffCard />
      </section>
    </>
  );
};

export default Staff;
