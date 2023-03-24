import React, { useState } from "react";
import {
  AdminNavbar,
  AdminSidebar,
  AdminContent,
  AdminEditInfor,
  AdminServiceContent,
  AdminAccountContent,
} from "../components";

const Admin = () => {
  const [active, setActive] = useState("Thành viên");
  
  return (
    <>
      <AdminNavbar />
      <section class="flex flex-row">
        <AdminSidebar active ={active} setActive={setActive} />
        {/* <AdminContent/> */}
        {/* <AdminEditInfor/> */}
        {active === "Dịch vụ" && <AdminServiceContent />}
        {active === "Tài khoản" && <AdminAccountContent />}
      </section>
    </>
  );
};

export default Admin;
