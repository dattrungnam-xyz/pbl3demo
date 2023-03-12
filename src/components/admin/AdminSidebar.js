import React from "react";

const AdminSidebar = () => {
  return (
    <>
      <div class="w-[20vw] h-[calc(100vh-62px)] bg-neutral-800 text-white flex flex-col items-center gap-2">
        <div class="mt-8 py-3 flex min-w-[150px] hover:bg-red-900 w-full px-8 cursor-pointer">
          <box-icon name="user" color="#ffffff"></box-icon>
          <div class="text-base pl-2  ">
            Thành viên
          </div>
        </div>
        <div class=" py-3 flex min-w-[150px] hover:bg-red-900 w-full px-8 cursor-pointer ">
          <box-icon name="user" color="#ffffff"></box-icon>
          <div class="text-base pl-2  " >
            Khách hàng
          </div>
        </div>
        <div class=" py-3 flex min-w-[150px] hover:bg-red-900 w-full px-8 cursor-pointer ">
          <box-icon color="#ffffff" name="list-ul"></box-icon>
          <div class="text-base pl-2  " >
            Dịch vụ
          </div>
        </div>
        <div class=" py-3 flex min-w-[150px] hover:bg-red-900 w-full px-8  cursor-pointer">
          <box-icon color="#ffffff" name="plus-circle"></box-icon>
          <div  class="text-base pl-2 " >
            Lịch đặt
          </div>
        </div>
        <div class=" py-3 flex min-w-[150px] hover:bg-red-900 w-full px-8  cursor-pointer">
          <box-icon color="#ffffff" name="signal-5"></box-icon>
          <div  class="text-base pl-2 " >
            Thống kê
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminSidebar;
