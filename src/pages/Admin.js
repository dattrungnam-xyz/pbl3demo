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

} from "../components";

const Admin = () => {
  const [active, setActive] = useState("Nhân viên");
  const user = useSelector(state => state.auth.login.currentUser)
  return (
    <>
      <AdminNavbar />
      

      <section className="flex flex-row pt-[60px]">
        {
        user.type ==="admin" ? <>
        <AdminSidebar active ={active} setActive={setActive} />
        {active === "Nhân viên" &&<AdminStaff/> }
        {/* <AdminEditInfor/> */}
        {active === "Dịch vụ" && <AdminService />}
        {active === "Sản phẩm bán kèm" && <AdminProducts />}
        {active === "Khách hàng" && <AdminAccount />}
        {active === "Lịch đặt" && <AdminBooking />}
         </>   : <>
          Khach hang khong duoc dung
         </>
        }
      </section>
    </>
  );
};

export default Admin;
