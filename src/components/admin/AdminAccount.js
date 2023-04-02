import React, { useEffect, useState } from "react";
import { getDataOnlyAdmin } from "../../utils/fetchApi";
import { useSelector } from "react-redux";

const AdminAccount = () => {
  const [data, setData] = useState();
  const [filter, setFilter] = useState();
  const user = useSelector((state) => state.auth.login.currentUser);

  useEffect(() => {
    user &&
      getDataOnlyAdmin("http://localhost:8080/v1/account/", user.token).then(
        (res) => {
          setData(res.filter((item)=>{
            if(filter)
              return item.LoaiTaiKhoan === filter
            else return item  
          }));
          console.log(res);
        }
      );
  }, [filter]);
  return (
    <>
      {data ? (
        <div className="w-full max-w-[80vw]  p-4  font-sans overflow-hidden">
          <div className="w-full py-4 grid grid-cols-3">
            <div className="flex gap-4">
              <button
              onClick={()=>{
                setFilter()
              }}
                type="button"
                className="h-full py-2 px-2 bg-gray-400 flex justify-center items-center text-white"
              >
                <box-icon name="user" color="#ffffff"></box-icon>
                All
              </button>
              <button
              onClick={()=>{
                setFilter("staff")
              }}
                type="button"
                className="h-full py-2 px-2 bg-gray-400 flex justify-center items-center text-white"
              >
                <box-icon name="user" color="#ffffff"></box-icon>
                staff
              </button>
              <button
              onClick={()=>{
                setFilter("admin")
              }}
                type="button"
                className="h-full py-2 px-2 bg-gray-400 flex justify-center items-center text-white"
              >
                <box-icon name="user" color="#ffffff"></box-icon>
                admin
              </button>
              <button
              onClick={()=>{
                setFilter("user")
              }}
                type="button"
                className="h-full py-2 px-2 bg-gray-400 flex justify-center items-center text-white"
              >
                <box-icon name="user" color="#ffffff"></box-icon>
                user
              </button>
            </div>
            <div className="flex items-center justify-center">
              <input
                type="text"
                placeholder="search...."
                className="h-full w-[250px] border-[2px] border-gray-200 rounded-xl outline-none p-2 "
              />
            </div>
            <div className="flex items-center justify-end">
              <button
                type="button"
                className="h-full py-2 px-6 bg-green-600 flex justify-center items-center text-white"
              >
                <box-icon name="plus" color="#ffffff"></box-icon>
                Add
              </button>
            </div>
          </div>

          {/*  */}
          {/* <div className="w-full ">
            <div className="bg-white shadow-md rounded">
              <table className="min-w-max w-full table-auto ">
                <thead>
                  <tr className="bg-gray-300 text-gray-600 uppercase text-sm leading-normal">
                    <th className="py-3 px-6 text-left">ID </th>
                    <th className="py-3 px-6 text-center">Họ Tên</th>
                    <th className="py-3 px-6 text-center">Tên đăng nhập</th>

                    <th className="py-3 px-6 text-center">Số điện thoại</th>
                    <th className="py-3 px-6 text-center">Loại </th>

                    <th className="py-3 px-6 text-center"> </th>
                  </tr>
                </thead>
              </table>
            </div>
            <div className="bg-white shadow-md rounded mb-4 max-h-[65vh] overflow-y-auto">
              <table className="min-w-max w-full table-auto ">
                <tbody className="text-gray-600 text-sm font-light max-h-[70vh] overflow-y-auto">
                  {data.map((item) => {
                    return (
                      <tr
                        key={item.IdTaiKhoan}
                        className="border-b border-gray-200 hover:bg-gray-100"
                      >
                        <td className="py-3 px-6 text-left">
                          <div className="flex items-center">
                            {item.IdTaiKhoan}
                          </div>
                        </td>

                        <td className="py-3 px-6 text-center">
                          <div className="flex items-center ">
                            <div className="mr-2">
                              {item.Avatar ? (
                                <img
                                  alt=""
                                  className="w-6 h-6 rounded-full"
                                  src={item.Avatar}
                                />
                              ) : (
                                <img
                                  alt=""
                                  className="w-6 h-6 rounded-full"
                                  src="https://t3.ftcdn.net/jpg/00/64/67/80/360_F_64678017_zUpiZFjj04cnLri7oADnyMH0XBYyQghG.jpg"
                                />
                              )}
                            </div>
                            <span>{item.HoTen}</span>
                          </div>
                        </td>

                        <td className="py-3 px-6 text-center">
                          <div className="flex items-center justify-center">
                            {item.TenDangNhap}.
                          </div>
                        </td>
                        <td className="py-3 px-6 text-center">
                          <div className="flex items-center justify-center">
                            {item.SoDienThoai}.
                          </div>
                        </td>
                        <td className="py-3 px-6 text-center">
                          <div className="flex items-center justify-center">
                            {item.LoaiTaiKhoan} .
                          </div>
                        </td>

                        <td className="py-3 px-6 text-center">
                          <div className="flex item-center justify-center">
                            <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                />
                              </svg>
                            </div>
                            <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                />
                              </svg>
                            </div>
                            <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                />
                              </svg>
                            </div>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div> */}
          {/*  */}
          <div className="w-full ">
            <div className="w-full grid grid-cols-4">
              <div className="bg-gray-300 text-gray-600 uppercase text-sm leading-normal text-center font-bold py-3 ">
                Id
              </div>
              <div className="bg-gray-300 text-gray-600 uppercase text-sm leading-normal text-center font-bold py-3">
                Tên Đăng Nhập
              </div>
              <div className="bg-gray-300 text-gray-600 uppercase text-sm leading-normal text-center font-bold py-3">
                Loại
              </div>
              <div className="bg-gray-300 text-gray-600 uppercase text-sm leading-normal text-center font-bold py-3"></div>
            </div>
            <div className="w-full max-h-[65vh] overflow-y-auto">
              
              {data.map((item) => {
                return (
                  <div
                    key={item.IdTaiKhoan}
                    className="w-full grid grid-cols-4 h-[70px] border-b border-gray-200 hover:bg-gray-100"
                  >
                    <div className=" items-center py-3 px-2 text-center flex justify-center">
                      {item.IdTaiKhoan}
                    </div>

                    <div className=" py-3 px-2 text-center flex items-center justify-center">
                      {
                        item.TenDangNhap
                      }
                    </div>
                    
                    <div className=" py-3 px-2 text-center flex items-center justify-center">
                      {item.LoaiTaiKhoan}
                    </div>
                    <div className=" py-3 px-2 text-center flex items-center justify-center">
                      <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      </div>
                      <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                          />
                        </svg>
                      </div>
                      <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default AdminAccount;
