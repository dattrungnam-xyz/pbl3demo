import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  AdminNavbar,
  AdminSidebar,
  AdminStaff,
  AdminEditInfor,
  AdminService,
  AdminAccount,
  AdminBooking,
  AdminProducts,
  AdminUser,
} from "../components";
import {
  AdminBill,
  AdminImport,
  AdminProfit,
  AdminRate,
  AdminShift,
} from "../components/admin";

const Admin = () => {
  const [active, setActive] = useState("Tài khoản");
  const user = useSelector((state) => state.auth.login.currentUser);
  return (
    <>
      <AdminNavbar />

      {!user && (
        <>
          <div className="w-full h-screen pt-[60px] flex items-center justify-center">
            <p>
              Vui lòng{" "}
              <Link to={"/Login"} className="text-md font-semibold underline">
                Đăng nhập
              </Link>{" "}
              để thực hiện chức năng này
            </p>
          </div>
        </>
      )}

      {user && user.type === "admin" ? (
        <>
          <section className="flex flex-row pt-[60px]">
            <AdminSidebar active={active} setActive={setActive} />
            {/* <AdminEditInfor/> */}
            {active === "Nhân viên" && <AdminStaff />}
            {active === "Nhập hàng" && <AdminImport />}

            {active === "Khách hàng" && <AdminUser />}
            {active === "Dịch vụ" && <AdminService />}
            {active === "Sản phẩm bán kèm" && <AdminProducts />}
            {active === "Tài khoản" && <AdminAccount />}
            {active === "Lịch đặt" && <AdminBooking />}
            {active === "Hóa đơn" && <AdminBill />}
            {active === "Doanh thu" && <AdminProfit />}
            {active === "Đánh giá" && <AdminRate />}
            {active === "Ca làm" && <AdminShift />}
          </section>
        </>
      ) : (
        <>
          {user && (
            <div className="w-full h-screen pt-[60px] flex items-center justify-center">
              <p>Bạn không có quyền truy cập trang này</p>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Admin;
