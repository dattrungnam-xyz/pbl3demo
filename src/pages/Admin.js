import React, { useState } from "react";
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
  
  return (
    <>
      <AdminNavbar />
      <section class="flex flex-row">
        <AdminSidebar active ={active} setActive={setActive} />
        {active === "Thành viên" &&<AdminContent/>}
        {/* <AdminEditInfor/> */}
        {active === "Dịch vụ" && <AdminServiceContent />}
        {active === "Sản phẩm bán kèm" && <AdminProducts />}
        {active === "Tài khoản" && <AdminAccountContent />}
        {active === "Lịch đặt" && <AdminBooking />}
      </section>
    </>
  );
};

export default Admin;
