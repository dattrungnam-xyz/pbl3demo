import React from "react";
import { Link } from "react-router-dom";

const UserNavbar = ({user,setUser}) => {
 
  return (
    <nav class="fixed right-0 left-0 top-0 z-50 ">
      <div class=" ">
        <div class="antialiased bg-gray-100 border">
          <div class="w-full text-gray-700 bg-white ">
            <div
             
              class="flex flex-col max-w-screen-xl px-2 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8"
            >
              <div class="flex flex-row items-center justify-between px-2 py-4">
                <Link
                  to={"/"}
                  class="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg focus:outline-none focus:shadow-outline"
                >
                  Barbershop
                </Link>
                {/* <button class="rounded-lg md:hidden focus:outline-none focus:shadow-outline">
                  <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
                    <path
                      x-show="!open"
                      fill-rule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    ></path>
                    <path
                      x-show="open"
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button> */}
              </div>
              <nav class="flex-col flex-grow hidden pb-4 md:pb-0 md:flex md:justify-end md:flex-row">
                <Link
                  to="/"
                  class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg  md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                >
                  Trang chủ
                </Link>
                <Link
                  to="/Staff"
                  class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg  md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                >
                  Thành viên
                </Link>
                <Link
                  to="/Service"
                  class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg  md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                >
                  Dịch vụ
                </Link>
                <Link
                  to="/Booking"
                  class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg  md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                >
                  Đặt lịch
                </Link>
                {user ? (
                  <> <div className=" ml-4 flex justify-center items-center " >
                    <img className="rounded-full border w-[30px] h-[30px]" src="https://khoinguonsangtao.vn/wp-content/uploads/2022/07/avatar-cute-2.jpg" alt=" "/>
                    <p>
                      Nguyễn Văn A
                    </p>
                    <div  className="ml-2">

                    <box-icon color="#374151" size='xs' type='solid' name='down-arrow'></box-icon>
                    </div>
                  </div></>
                ) : (
                  <>
                    <Link className="ml-4 lg:min-w-[120px]" to={"/Register"}>
                      <button class="block w-full h-full border font-semibold  border-neutral-800 uppercase shadow bg-white  text-[#374151] text-xs py-2 px-6 rounded hover:opacity-80">
                        Đăng Kí
                      </button>
                    </Link>
                    <Link className="ml-4 lg:min-w-[120px]" to={"/Login"}>
                      <button class="block w-full h-full font-semibold  uppercase shadow bg-neutral-800 hover:bg-neutral-700 focus:shadow-outline focus:outline-none text-white text-xs py-2 px-6 rounded">
                        Đăng Nhập
                      </button>
                    </Link>
                  </>
                )}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default UserNavbar;
