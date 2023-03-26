import React from "react";

import { UserNavbar } from "../components";
const StaffCard = () => {
  return (
    <div className="flex max-lg:flex-col max-lg:gap-4 gap-12 w-[70%] max-lg:p-8 h-full max-lg:w-full  p-14 items-center justify-between rounded bg-gradient-to-r from-[#010c2a] to-[#090708]">
      <div className="flex flex-col  items-center justify-center ">
        <img
          src="http://4.bp.blogspot.com/-CblMf4izKj4/UWy2Xpaw2VI/AAAAAAAACqo/pWhBgCRPQks/s1600/IMG_9883.jpg"
          alt=""
          className="w-[240px] max-lg:w-[180px] h-[240px] min-w-[150px] min-h-[150px] max-lg:h-[180px] object-cover "
        />
        
        <p className="py-2 text-lg text-white">2 Năm kinh nghiệm</p>
        <p className="py-2 text-lg text-white">Sao trung bình</p>
      </div>
      <div className=" flex flex-col flex-1 items-center justify-center text-white  border-white border-[4px] py-8 px-8 max-lg:px-6 max-lg:py-6 min-w-[360px]">
        <p className="font-bold text-2xl mb-2 ">Nguyễn Quốc Đạt</p>
        <p className="py-2 text-lg text-white">0369394745</p>
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
    <div className="w-[30%] h-[100%]  border border-[#010c2a] rounded overflow-y-auto max-lg:hidden">
      <div className=" w-full h-14 flex border-b items-center justify-center bg-gradient-to-r from-[#010c2a] to-[#090708] text-white">
        <p>Danh sách nhân viên</p>
      </div>
      <div className=" h-[calc(100%-56px)] overflow-y-auto ">
        <div className="grid grid-cols-1 gap-2 px-4 py-4 w-full ">
          <div className="flex w-full h-16 p-2 gap-4  items-center rounded-xl cursor-pointer bg-gradient-to-r from-[#010c2a] to-[#090708]">
            <img
              className="w-[46px] h-[46px] border border-white object-cover rounded-full"
              src="http://4.bp.blogspot.com/-CblMf4izKj4/UWy2Xpaw2VI/AAAAAAAACqo/pWhBgCRPQks/s1600/IMG_9883.jpg"
              alt=""
            />
            <p className="text-xl text-white"> Nguyễn văn A</p>
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
      <section className="flex flex-row gap-4 px-8 h-[100vh] max-lg:h-full pt-[80px] pb-5">
        <StaffCard />
        <ListStaffCard />
      </section>
    </>
  );
};

export default Staff;
