import React from "react";
import { Link } from "react-router-dom";

const SubNavbar = ({ login }) => {
  return (
    <nav className="fixed top-0 right-0 left-0 flex w-full h-[60px] bg-slate-200 px-4 justify-between border shadow z-10">
      <Link to={"/"} className="flex items-center justify-center gap-2 cursor-pointer ">
        <box-icon name="left-arrow-circle"></box-icon>
        <p className="text-base">Trang chủ</p>
      </Link >
      <div className="flex items-center justify-center">
        {login ? (
          <Link className="lg:min-w-[120px]" to={"/Login"}>
            <button class="block w-full h-[42px] border font-semibold  border-neutral-800 uppercase shadow bg-white  text-[#374151] text-xs py-2 px-6 rounded hover:opacity-80">
              Đăng Nhập
            </button>
          </Link>
        ) : (
          <Link className=" lg:min-w-[120px]" to={"/Register"}>
            <button class="block w-full h-[42px] border font-semibold  border-neutral-800 uppercase shadow bg-white  text-[#374151] text-xs py-2 px-6 rounded hover:opacity-80">
              Đăng Kí
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default SubNavbar;
