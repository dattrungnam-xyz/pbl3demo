import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../redux/authSlice";

const AdminNavbar = () => {
  const user = useSelector((state)=> state.auth.login.currentUser)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogOut = () => {

    dispatch(logOut());

    navigate("/Admin");
    
    window.location.reload(false);
  }
  return (
    <div className="fixed top-0 left-0 right-0">
      <div className="antialiased bg-gray-100  border">
        <div className="w-full text-gray-700 bg-white ">
          <div
            x-data="{ open: true }"
            className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8"
          >
            <div className="flex flex-row items-center justify-between p-4">
              <Link
                to="/Admin"
                href="#"
                className="text-lg font-semibold tracking-widest text-gray-800 uppercase rounded-lg  focus:outline-none focus:shadow-outline"
              >
                Barbershop
              </Link>

              
            </div>

             <nav className="flex-col flex-grow hidden pb-4 md:pb-0 md:flex md:justify-end md:flex-row">
                <Link
                  to="/"
                  className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg  md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                >
                  Trang chủ
                </Link>
                
                <Link
                  to="/Booking"
                  className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg  md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                >
                  Đặt lịch
                </Link>
                {user ? (
                  <>
                    <div className=" relative group p-1 ml-4 flex justify-center  items-center  cursor-pointer hover:bg-gray-200 rounded">
                      {user.avatar?<img
                        className="rounded-full border w-[30px] h-[30px]"
                        src={user.avatar}
                        alt=" "
                      />:<img
                      className="rounded-full border w-[30px] h-[30px]"
                      src={"https://t3.ftcdn.net/jpg/00/64/67/80/360_F_64678017_zUpiZFjj04cnLri7oADnyMH0XBYyQghG.jpg"}
                      alt=" "
                    />}
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
                        <Link to={`/User/${user.id}`} className="py-2 px-4 w-full h-full block hover:bg-gray-200 text-gray-900 ">
                          Chỉnh sửa thông tin
                        </Link>
                        
                        
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
  );
};

export default AdminNavbar;
