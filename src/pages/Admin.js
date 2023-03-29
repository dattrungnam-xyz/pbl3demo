import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  AdminNavbar,
  AdminSidebar,
  AdminContent,
  AdminEditInfor,
  AdminServiceContent,
  AdminAccountContent,
  AdminBooking,
  AdminProducts,
} from "../components";

const Admin = () => {
  const [active, setActive] = useState("Thành viên");
  const user = useSelector(state => state.auth.login.currentUser)
  return (
    <>
      <AdminNavbar />
      <section className="flex flex-row">
        {
        user.type ==="admin" ? <>
        <AdminSidebar active ={active} setActive={setActive} />
        {active === "Thành viên" &&<AdminContent/>}
        {/* <AdminEditInfor/> */}
        {active === "Dịch vụ" && <AdminServiceContent />}
        {active === "Sản phẩm bán kèm" && <AdminProducts />}
        {active === "Tài khoản" && <AdminAccountContent />}
        {active === "Lịch đặt" && <AdminBooking />}
         </>   : <>
          Khach hang deo duoc dung
         </>
        }
      </section>
    </>
  );
};

export default Admin;
