import React from "react";

const AdminSidebar = () => {
  return (
    <>
      <div class="w-[20vw] h-[calc(100vh-62px)] bg-neutral-800 text-white flex flex-col items-center gap-2">
        <div class="mt-8 py-3 flex min-w-[150px] hover:bg-red-900 w-full px-8   ">
          <box-icon name="user" color="#ffffff"></box-icon>
          <a class="text-base pl-2 " href="/">
            Thành viên
          </a>
        </div>
        <div class=" py-3 flex min-w-[150px] hover:bg-red-900 w-full px-8  ">
          <box-icon name="user" color="#ffffff"></box-icon>
          <a class="text-base pl-2 " href="/">
            Khách hàng
          </a>
        </div>
        <div class=" py-3 flex min-w-[150px] hover:bg-red-900 w-full px-8  ">
          <box-icon color="#ffffff" name="list-ul"></box-icon>
          <a class="text-base pl-2 " href="/">
            Dịch vụ
          </a>
        </div>
        <div class=" py-3 flex min-w-[150px] hover:bg-red-900 w-full px-8  ">
          <box-icon color="#ffffff" name="plus-circle"></box-icon>
          <a class="text-base pl-2" href="/">
            Lịch đặt
          </a>
        </div>
        <div class=" py-3 flex min-w-[150px] hover:bg-red-900 w-full px-8  ">
          <box-icon color="#ffffff" name="signal-5"></box-icon>
          <a class="text-base pl-2" href="/">
            Thống kê
          </a>
        </div>
      </div>
    </>
  );
};

export default AdminSidebar;
