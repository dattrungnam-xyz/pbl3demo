import React from "react";

const AdminSidebar = ({ active, setActive }) => {
  return (
    <>
      <div class="max-w-[20vw] h-[calc(100vh-62px)] bg-gray-600 text-white flex flex-col items-center ">
        {active === "Thành viên" ? (
          <div
            onClick={()=> setActive("Thành viên")}
            class="mt-8 py-3 flex min-w-[150px] bg-neutral-700 w-full px-8 cursor-pointer"
          >
            <box-icon name="user" color="#ffffff"></box-icon>
            <div class="text-base pl-2  ">Thành viên</div>
          </div>
        ) : (
          <div
            onClick={()=>setActive("Thành viên")}
            class="mt-8 py-3 flex min-w-[150px] hover:bg-neutral-500 w-full px-8 cursor-pointer"
          >
            <box-icon name="user" color="#ffffff"></box-icon>
            <div class="text-base pl-2  ">Thành viên</div>
          </div>
        )}

        {active === "Tài khoản" ? (
          <div
            onClick={()=>setActive("Tài khoản")}
            class=" py-3 flex min-w-[150px] bg-neutral-700 w-full px-8 cursor-pointer "
          >
            <box-icon name="user" color="#ffffff"></box-icon>
            <div class="text-base pl-2  ">Tài khoản</div>
          </div>
        ) : (
          <div
            onClick={()=>setActive("Tài khoản")}
            class=" py-3 flex min-w-[150px] hover:bg-neutral-500 w-full px-8 cursor-pointer "
          >
            <box-icon name="user" color="#ffffff"></box-icon>
            <div class="text-base pl-2  ">Tài khoản</div>
          </div>
        )}
        {active === "Dịch vụ" ? (
          <div
            onClick={()=>setActive("Dịch vụ")}
            class=" py-3 flex min-w-[150px] bg-neutral-700 w-full px-8 cursor-pointer "
          >
            <box-icon color="#ffffff" name="list-ul"></box-icon>
            <div class="text-base pl-2  ">Dịch vụ</div>
          </div>
        ) : (
          <div
            onClick={()=>setActive("Dịch vụ")}
            class=" py-3 flex min-w-[150px] hover:bg-neutral-500 w-full px-8 cursor-pointer "
          >
            <box-icon color="#ffffff" name="list-ul"></box-icon>
            <div class="text-base pl-2  ">Dịch vụ</div>
          </div>
        )}

        {/* <div class=" py-3 flex min-w-[150px] hover:bg-neutral-500 w-full px-8 cursor-pointer ">
          <box-icon color="#ffffff" name="list-ul"></box-icon>
          <div class="text-base pl-2  ">Dịch vụ</div>
        </div> */}
        {active === "Lịch đặt" ? (
          <div
            onClick={()=>setActive("Lịch đặt")}
            class=" py-3 flex min-w-[150px] bg-neutral-700 w-full px-8 cursor-pointer "
          >
            <box-icon color="#ffffff" name="plus-circle"></box-icon>

            <div class="text-base pl-2  ">Lịch đặt</div>
          </div>
        ) : (
          <div
            onClick={()=>setActive("Lịch đặt")}
            class=" py-3 flex min-w-[150px] hover:bg-neutral-500 w-full px-8 cursor-pointer "
          >
            <box-icon color="#ffffff" name="plus-circle"></box-icon>

            <div class="text-base pl-2  ">Lịch đặt</div>
          </div>
        )}
        {/* <div class=" py-3 flex min-w-[150px] hover:bg-neutral-500 w-full px-8  cursor-pointer">
          <box-icon color="#ffffff" name="plus-circle"></box-icon>
          <div class="text-base pl-2 ">Lịch đặt</div>
        </div> */}
        {active === "Doanh thu" ? (
          <div
            onClick={()=>setActive("Doanh thu")}
            class=" py-3 flex min-w-[150px] bg-neutral-700 w-full px-8 cursor-pointer "
          >
            <box-icon color="#ffffff" name="signal-5"></box-icon>

            <div class="text-base pl-2  ">Doanh thu</div>
          </div>
        ) : (
          <div
            onClick={()=>setActive("Doanh thu")}
            class=" py-3 flex min-w-[150px] hover:bg-neutral-500 w-full px-8 cursor-pointer "
          >
            <box-icon color="#ffffff" name="signal-5"></box-icon>

            <div class="text-base pl-2  ">Doanh thu</div>
          </div>
        )}
        {/* <div class=" py-3 flex min-w-[150px] hover:bg-neutral-500 w-full px-8  cursor-pointer">
          <box-icon color="#ffffff" name="signal-5"></box-icon>
          <div class="text-base pl-2 ">Doanh thu</div>
        </div> */}
        {active === "Hóa đơn" ? (
          <div
            onClick={()=>setActive("Hóa đơn")}
            class=" py-3 flex min-w-[150px] bg-neutral-700 w-full px-8 cursor-pointer "
          >
            <box-icon type="solid" color="#ffffff" name="notepad"></box-icon>

            <div class="text-base pl-2  ">Hóa đơn</div>
          </div>
        ) : (
          <div
            onClick={()=>setActive("Hóa đơn")}
            class=" py-3 flex min-w-[150px] hover:bg-neutral-500 w-full px-8 cursor-pointer "
          >
            <box-icon type="solid" color="#ffffff" name="notepad"></box-icon>

            <div class="text-base pl-2  ">Hóa đơn</div>
          </div>
        )}
        {/* <div class=" py-3 flex min-w-[150px] hover:bg-neutral-500 w-full px-8  cursor-pointer">
          <box-icon type="solid" color="#ffffff" name="notepad"></box-icon>
          <div class="text-base pl-2 ">Hóa đơn</div>
        </div> */}
        {active === "Nhập hàng" ? (
          <div
            onClick={()=>setActive("Nhập hàng")}
            class=" py-3 flex min-w-[150px] bg-neutral-700 w-full px-8 cursor-pointer "
          >
            <box-icon type="solid" color="#ffffff" name="notepad"></box-icon>

            <div class="text-base pl-2  ">Nhập hàng</div>
          </div>
        ) : (
          <div
            onClick={()=>setActive("Nhập hàng")}
            class=" py-3 flex min-w-[150px] hover:bg-neutral-500 w-full px-8 cursor-pointer "
          >
            <box-icon type="solid" color="#ffffff" name="notepad"></box-icon>

            <div class="text-base pl-2  ">Nhập hàng</div>
          </div>
        )}
        {/* <div class=" py-3 flex min-w-[150px] hover:bg-neutral-500 w-full px-8  cursor-pointer">
          <box-icon type="solid" color="#ffffff" name="notepad"></box-icon>
          <div class="text-base pl-2 ">Nhập hàng</div>
        </div> */}
        {active === "Sản phẩm bán kèm" ? (
          <div
            onClick={()=>setActive("Sản phẩm bán kèm")}
            class=" py-3 flex min-w-[150px] bg-neutral-700 w-full px-8 cursor-pointer "
          >
            <box-icon type="solid" color="#ffffff" name="notepad"></box-icon>

            <div class="text-base pl-2  ">Sản phẩm bán kèm</div>
          </div>
        ) : (
          <div
            onClick={()=>setActive("Sản phẩm bán kèm")}
            class=" py-3 flex min-w-[150px] hover:bg-neutral-500 w-full px-8 cursor-pointer "
          >
            <box-icon type="solid" color="#ffffff" name="notepad"></box-icon>

            <div class="text-base pl-2  ">Sản phẩm bán kèm</div>
          </div>
        )}
        {/* <div class=" py-3 flex min-w-[150px] hover:bg-neutral-500 w-full px-8  cursor-pointer">
          <box-icon type="solid" color="#ffffff" name="notepad"></box-icon>
          <div class="text-base pl-2 ">Sản phẩm bán kèm</div>
        </div> */}
      </div>
    </>
  );
};

export default AdminSidebar;
