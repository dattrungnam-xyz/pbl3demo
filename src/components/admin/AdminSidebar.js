import React from "react";

const AdminSidebar = ({ active, setActive }) => {
  return (
    <>
      <div className="max-w-[20vw] h-[calc(100vh-60px)] bg-gray-600 text-white flex flex-col items-center ">
        <div
          onClick={() => setActive("Tài khoản")}
          className={`mt-8 py-3 flex min-w-[150px] ${
            active === "Tài khoản" ? "bg-neutral-700" : " hover:bg-neutral-500"
          } w-full px-8 cursor-pointer`}
        >
          <box-icon name="user" color="#ffffff"></box-icon>
          <div className="text-base pl-2  ">Tài khoản</div>
        </div>
        <div
          onClick={() => setActive("Nhân viên")}
          className={`py-3 flex min-w-[150px] ${
            active === "Nhân viên" ? "bg-neutral-700" : " hover:bg-neutral-500"
          } w-full px-8 cursor-pointer`}
        >
          <box-icon name="user" color="#ffffff"></box-icon>
          <div className="text-base pl-2  ">Nhân viên</div>
        </div>
        <div
          onClick={() => setActive("Khách hàng")}
          className={` py-3 flex min-w-[150px] ${
            active === "Khách hàng" ? "bg-neutral-700" : " hover:bg-neutral-500"
          } w-full px-8 cursor-pointer`}
        >
          <box-icon name="user" color="#ffffff"></box-icon>
          <div className="text-base pl-2  ">Khách hàng</div>
        </div>

        <div
          onClick={() => setActive("Dịch vụ")}
          className={` py-3 flex min-w-[150px] ${
            active === "Dịch vụ" ? "bg-neutral-700" : " hover:bg-neutral-500"
          } w-full px-8 cursor-pointer`}
        >
          <box-icon color="#ffffff" name="list-ul"></box-icon>
          <div className="text-base pl-2  ">Dịch vụ</div>
        </div>

        <div
          onClick={() => setActive("Lịch đặt")}
          className={`py-3 flex min-w-[150px] ${
            active === "Lịch đặt" ? "bg-neutral-700" : " hover:bg-neutral-500"
          } w-full px-8 cursor-pointer`}
        >
          <box-icon color="#ffffff" name="plus-circle"></box-icon>

          <div className="text-base pl-2  ">Lịch đặt</div>
        </div>
        <div
          onClick={() => setActive("Doanh thu")}
          className={`py-3 flex min-w-[150px] ${
            active === "Doanh thu" ? "bg-neutral-700" : " hover:bg-neutral-500"
          } w-full px-8 cursor-pointer`}
        >
          <box-icon color="#ffffff" name="signal-5"></box-icon>

          <div className="text-base pl-2  ">Thống kê thu nhập</div>
        </div>

        <div
          onClick={() => setActive("Hóa đơn")}
          className={`py-3 flex min-w-[150px] ${
            active === "Hóa đơn" ? "bg-neutral-700" : " hover:bg-neutral-500"
          } w-full px-8 cursor-pointer`}
        >
          <box-icon type="solid" color="#ffffff" name="notepad"></box-icon>

          <div className="text-base pl-2  ">Hóa đơn</div>
        </div>
        <div
          onClick={() => setActive("Nhập hàng")}
          className={`py-3 flex min-w-[150px] ${
            active === "Nhập hàng" ? "bg-neutral-700" : " hover:bg-neutral-500"
          } w-full px-8 cursor-pointer`}
        >
          <box-icon type="solid" color="#ffffff" name="notepad"></box-icon>

          <div className="text-base pl-2  ">Nhập hàng</div>
        </div>
        <div
          onClick={() => setActive("Sản phẩm bán kèm")}
          className={`py-3 flex min-w-[150px] ${
            active === "Sản phẩm bán kèm" ? "bg-neutral-700" : " hover:bg-neutral-500"
          } w-full px-8 cursor-pointer`}
        >
          <box-icon type="solid" color="#ffffff" name="notepad"></box-icon>

          <div className="text-base pl-2  ">Sản phẩm bán kèm</div>
        </div>
        <div
          onClick={() => setActive("Đánh giá")}
          className={`py-3 flex min-w-[150px] ${
            active === "Đánh giá" ? "bg-neutral-700" : " hover:bg-neutral-500"
          } w-full px-8 cursor-pointer`}
        >
          <box-icon type='solid' color="#ffffff" name='comment'></box-icon>

          <div className="text-base pl-2  ">Đánh giá</div>
        </div>
        <div
          onClick={() => setActive("Ca làm")}
          className={`py-3 flex min-w-[150px] ${
            active === "Ca làm" ? "bg-neutral-700" : " hover:bg-neutral-500"
          } w-full px-8 cursor-pointer`}
        >
          <box-icon type='solid' color="#ffffff" name='calendar'></box-icon>

          <div className="text-base pl-2  ">Ca làm</div>
        </div>
      </div>
    </>
  );
};

export default AdminSidebar;
