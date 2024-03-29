import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../redux/authSlice";

const UserNavbar = () => {
  const user = useSelector((state) => state.auth.login.currentUser);

  const [showOptionNavigate, setShowOptionNavigate] = useState(false);
  const [showOptionUser, setShowOptionUser] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogOut = () => {
    dispatch(logOut());

    navigate("/");

    window.location.reload(false);
  };

  return (
    <nav className="fixed right-0 left-0 top-0 z-50 ">
      <div className="w-full ">
        <div className="w-full antialiased bg-gray-100 border">
          <div className="w-full text-gray-700 bg-white ">
            <div className="flex flex-col w-full px-2 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
              <div className="flex flex-row items-center justify-between px-2 py-4">
                <Link
                  to={"/"}
                  className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg focus:outline-none focus:shadow-outline"
                >
                  Barbershop
                </Link>
                <button
                  onClick={() => {
                    setShowOptionNavigate((pre) => !pre);
                  }}
                  className="rounded-lg md:hidden focus:outline-none focus:shadow-outline"
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    className="w-6 h-6"
                  >
                    {showOptionNavigate ? (
                      <path
                        x-show="open"
                        fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    ) : (
                      <path
                        x-show="!open"
                        fill-rule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                        clip-rule="evenodd"
                      ></path>
                    )}
                  </svg>
                </button>
              </div>

              <nav className="flex-col flex-grow hidden pb-4 md:pb-0 md:flex md:justify-end md:flex-row">
                <Link
                  to="/"
                  className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg  md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                >
                  Trang chủ
                </Link>
                <Link
                  to="/Staff"
                  className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg  md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                >
                  Thành viên
                </Link>
                <Link
                  to="/Service"
                  className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg  md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                >
                  Dịch vụ
                </Link>

               { <Link
                  to="/Booking"
                  className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg  md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                >
                  Đặt lịch
                </Link>}

                {user ? (
                  <>
                    <div className=" relative group p-1 ml-4 flex justify-center  items-center  cursor-pointer hover:bg-gray-200 rounded">
                      {user.avatar ? (
                        <img
                          className="rounded-full border w-[30px] h-[30px]"
                          src={user.avatar}
                          alt=" "
                        />
                      ) : (
                        <img
                          className="rounded-full border w-[30px] h-[30px]"
                          src={
                            "https://t3.ftcdn.net/jpg/00/64/67/80/360_F_64678017_zUpiZFjj04cnLri7oADnyMH0XBYyQghG.jpg"
                          }
                          alt=" "
                        />
                      )}
                      <p className="text-gray-900 ml-2">{user.name}</p>
                      <div className="ml-2">
                        <box-icon
                          color="#374151"
                          size="xs"
                          type="solid"
                          name="down-arrow"
                        ></box-icon>
                      </div>

                      <div className="absolute w-[220px] top-[100%] right-0 hidden translate-y-[4px]  bg-white border border-gray-300 group-hover:block before:block before:absolute before:w-[103%] before:h-[6px] before:translate-y-[-6px] before:translate-x-[-2px] before:bg-transparent rounded">
                        {user.type === "admin" && (
                          <Link
                            to={`/Admin`}
                            className="py-2 px-4 w-full h-full block hover:bg-gray-200 text-gray-900 "
                          >
                            Quản lý
                          </Link>
                        )}
                        {user.type !== "admin" && (
                          <Link
                            to={`/User/${user.id}`}
                            className="py-2 px-4 w-full h-full block hover:bg-gray-200 text-gray-900 "
                          >
                            Chỉnh sửa thông tin
                          </Link>
                        )}
                        {user.type !== "admin" && (
                          <Link
                            to={`/BookingInfor/${user.id}`}
                            className="w-full h-full block py-2 px-4 hover:bg-gray-200 text-gray-900"
                          >
                            Lịch đặt của tôi
                          </Link>
                        )}
                        {user.type === "staff" && (
                          <Link
                            to={`/Rate`}
                            className="w-full h-full block py-2 px-4 hover:bg-gray-200 text-gray-900"
                          >
                            Đánh giá về tôi
                          </Link>
                        )}
                        {
                          <Link
                            to={`/ChangePassword/${user.id}`}
                            className="w-full h-full block py-2 px-4 hover:bg-gray-200 text-gray-900"
                          >
                            Đổi mật khẩu
                          </Link>
                        }
                        <div
                          onClick={handleLogOut}
                          className="py-2 px-4 hover:bg-gray-200 text-gray-900"
                        >
                          Đăng xuất
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <Link className="ml-4 lg:min-w-[120px]" to={"/Register"}>
                      <button className="block w-full h-full border font-semibold  border-neutral-800 uppercase shadow bg-white  text-[#374151] text-xs py-2 px-6 rounded hover:opacity-80">
                        Đăng Kí
                      </button>
                    </Link>
                    <Link className="ml-4 lg:min-w-[120px]" to={"/Login"}>
                      <button className="block w-full h-full font-semibold  uppercase shadow bg-neutral-800 hover:bg-neutral-700 focus:shadow-outline focus:outline-none text-white text-xs py-2 px-6 rounded">
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
      {showOptionNavigate && (
        <>
          <section className=" w-full  bg-transparent flex justify-end  ">
            <div className="w-[60%] bg-white flex flex-col rounded border ">
              {/* 
                    
                    
                    aaaa
                    */}
              <Link
                to="/"
                className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg  md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              >
                Trang chủ
              </Link>
              <Link
                to="/Staff"
                className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg  md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              >
                Thành viên
              </Link>
              <Link
                to="/Service"
                className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg  md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              >
                Dịch vụ
              </Link>

              <Link
                to="/Booking"
                className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg  md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              >
                Đặt lịch
              </Link>

              {user ? (
                <>
                  <div
                    onClick={() => {
                      setShowOptionUser((pre) => !pre);
                    }}
                    className=" relative group p-1 pl-3 flex justify-start  items-center  cursor-pointer hover:bg-gray-200 rounded"
                  >
                    {user.avatar ? (
                      <img
                        className="rounded-full border w-[30px] h-[30px]"
                        src={user.avatar}
                        alt=" "
                      />
                    ) : (
                      <img
                        className="rounded-full border w-[30px] h-[30px]"
                        src={
                          "https://t3.ftcdn.net/jpg/00/64/67/80/360_F_64678017_zUpiZFjj04cnLri7oADnyMH0XBYyQghG.jpg"
                        }
                        alt=" "
                      />
                    )}

                    <p className="text-gray-900 ml-2">{user.name}</p>
                    <div className="ml-2">
                      <box-icon
                        color="#374151"
                        size="xs"
                        type="solid"
                        name="down-arrow"
                      ></box-icon>
                    </div>
                  </div>

                  {showOptionUser && (
                    <>
                      {user.type === "admin" && (
                        <Link
                          to={`/Admin`}
                          //className="py-2 px-4 w-full h-full block hover:bg-gray-200 text-gray-900 "
                          className="px-4 py-2 mt-2 text-sm  bg-transparent rounded-lg  md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        >
                          Quản lý
                        </Link>
                      )}
                      {user.type !== "admin" && (
                        <Link
                          to={`/User/${user.id}`}
                          className="py-2 px-4 w-full h-full block hover:bg-gray-200 text-gray-900 "
                        >
                          Chỉnh sửa thông tin
                        </Link>
                      )}
                      {user.type !== "admin" && (
                        <Link
                          to={`/BookingInfor/${user.id}`}
                          className="w-full h-full block py-2 px-4 hover:bg-gray-200 text-gray-900"
                        >
                          Lịch đặt của tôi
                        </Link>
                      )}
                      {user.type === "staff" && (
                        <Link
                          to={`/Rate`}
                          className="w-full h-full block py-2 px-4 hover:bg-gray-200 text-gray-900"
                        >
                          Đánh giá về tôi
                        </Link>
                      )}
                      {
                        <Link
                          to={`/ChangePassword/${user.id}`}
                          className="w-full h-full block py-2 px-4 hover:bg-gray-200 text-gray-900"
                        >
                          Đổi mật khẩu
                        </Link>
                      }
                      <div
                        onClick={handleLogOut}
                        className="py-2 px-4 hover:bg-gray-200 text-gray-900"
                      >
                        Đăng xuất
                      </div>
                    </>
                  )}
                </>
              ) : (
                <>
                  <Link
                    className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg  md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    to={"/Register"}
                  >
                    Đăng Kí
                  </Link>
                  <Link
                    className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg  md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    to={"/Login"}
                  >
                    Đăng Nhập
                  </Link>
                </>
              )}
            </div>
          </section>
        </>
      )}
    </nav>
  );
};

export default UserNavbar;
