import React, { useState } from "react";
import { useSelector } from "react-redux";
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
import { AdminBill, AdminImport } from "../components/admin";

const Admin = () => {
  const [active, setActive] = useState("Tài khoản");
  const user = useSelector(state => state.auth.login.currentUser)
  return (
    <>
      <AdminNavbar />
      

      <section className="flex flex-row pt-[60px]">
        
       
        <AdminSidebar active ={active} setActive={setActive} />
        {/* <AdminEditInfor/> */}
        {active === "Nhân viên" &&<AdminStaff/> }
        {active === "Nhập hàng" &&<AdminImport/> }

        {active === "Khách hàng" &&<AdminUser/> }
        {active === "Dịch vụ" && <AdminService />}
        {active === "Sản phẩm bán kèm" && <AdminProducts />}
        {active === "Tài khoản" && <AdminAccount />}
        {active === "Lịch đặt" && <AdminBooking />}
        {active === "Hóa đơn" && <AdminBill />}
        
        
      </section>
    </>
  );
};

export default Admin;
