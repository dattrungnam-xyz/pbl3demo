import React from "react";

const AdminSidebar = () => {
  return (
    <>
      <div class="w-[20vw] h-[calc(100vh-62px)] bg-gray-600 text-white flex flex-col items-center gap-2">
        <div class="mt-8 py-3 flex min-w-[150px] hover:bg-neutral-700 w-full px-8 cursor-pointer">
          <box-icon name="user" color="#ffffff"></box-icon>
          <div class="text-base pl-2  ">
            Thành viên
          </div>
        </div>
        <div class=" py-3 flex min-w-[150px] hover:bg-neutral-700 w-full px-8 cursor-pointer ">
          <box-icon name="user" color="#ffffff"></box-icon>
          <div class="text-base pl-2  " >
            Tài khoản
          </div>
        </div>
        <div class=" py-3 flex min-w-[150px] hover:bg-neutral-700 w-full px-8 cursor-pointer ">
          <box-icon color="#ffffff" name="list-ul"></box-icon>
          <div class="text-base pl-2  " >
            Dịch vụ
          </div>
        </div>
        <div class=" py-3 flex min-w-[150px] hover:bg-neutral-700 w-full px-8  cursor-pointer">
          <box-icon color="#ffffff" name="plus-circle"></box-icon>
          <div  class="text-base pl-2 " >
            Lịch đặt
          </div>
        </div>
        <div class=" py-3 flex min-w-[150px] hover:bg-neutral-700 w-full px-8  cursor-pointer">
          <box-icon color="#ffffff" name="signal-5"></box-icon>
          <div  class="text-base pl-2 " >
            Doanh thu
          </div>
        </div>
        <div class=" py-3 flex min-w-[150px] hover:bg-neutral-700 w-full px-8  cursor-pointer">
        <box-icon type='solid' color="#ffffff" name='notepad'></box-icon>
          <div  class="text-base pl-2 " >
            Hóa đơn
          </div>
        </div>
        <div class=" py-3 flex min-w-[150px] hover:bg-neutral-700 w-full px-8  cursor-pointer">
        <box-icon type='solid' color="#ffffff" name='notepad'></box-icon>
          <div  class="text-base pl-2 " >
            Nhập hàng
          </div>
        </div>
        <div class=" py-3 flex min-w-[150px] hover:bg-neutral-700 w-full px-8  cursor-pointer">
        <box-icon type='solid' color="#ffffff" name='notepad'></box-icon>
          <div  class="text-base pl-2 " >
            Sản phẩm bán kèm
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminSidebar;
