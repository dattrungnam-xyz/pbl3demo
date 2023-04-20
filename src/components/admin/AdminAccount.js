import React, { useEffect, useState } from "react";
import { getDataOnlyAdmin } from "../../utils/fetchApi";
import { useSelector } from "react-redux";
import AccountModal from "./AccountModal";

const AdminAccount = () => {
  const [data, setData] = useState();
  const [idAccount, setIdAccount] = useState();
  const [modal, setModal] = useState(false);
  const [modalStatus, setModalStatus] = useState();
  const [filter, setFilter] = useState();

  const [usernameFilter, setUsernameFilter] = useState();

  const user = useSelector((state) => state.auth.login.currentUser);

  useEffect(() => {
    user &&
      getDataOnlyAdmin("http://localhost:8080/v1/account/", user.token).then(
        (res) => {
          setData(
            res.filter((item) => {
              if (filter) return item.LoaiTaiKhoan === filter;
              else return item;
            })
          );
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
                onClick={() => {
                  setFilter();
                }}
                type="button"
                className="h-full py-2 px-2 bg-gray-400 flex justify-center items-center text-white"
              >
                <box-icon name="user" color="#ffffff"></box-icon>
                All
              </button>
              <button
                onClick={() => {
                  setFilter("staff");
                }}
                type="button"
                className="h-full py-2 px-2 bg-gray-400 flex justify-center items-center text-white"
              >
                <box-icon name="user" color="#ffffff"></box-icon>
                staff
              </button>
              <button
                onClick={() => {
                  setFilter("admin");
                }}
                type="button"
                className="h-full py-2 px-2 bg-gray-400 flex justify-center items-center text-white"
              >
                <box-icon name="user" color="#ffffff"></box-icon>
                admin
              </button>
              <button
                onClick={() => {
                  setFilter("user");
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
                onChange={(e) => {
                  setUsernameFilter(e.target.value);
                }}
                value={usernameFilter}
              />
            </div>
            <div className="flex items-center justify-end"></div>
          </div>

          <div className="w-full ">
            <div className="w-full grid grid-cols-5">
              <div className="bg-gray-300 text-gray-600 uppercase text-sm leading-normal text-center font-bold py-3 ">
                STT
              </div>
              <div className="bg-gray-300 text-gray-600 uppercase text-sm leading-normal text-center font-bold py-3 ">
                Họ tên
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
              {data
                .filter((item) => {
                  if (usernameFilter) {
                    return item.TenDangNhap.toLowerCase().includes(usernameFilter.toLowerCase());
                  } else {
                    return item;
                  }
                })
                .map((item,index) => {
                  return (
                    <div
                      key={item.IdTaiKhoan}
                      className="w-full grid grid-cols-5 h-[70px] border-b border-gray-200 hover:bg-gray-100"
                    >
                      <div className=" items-center py-3 px-2 text-center flex justify-center">
                        {index}
                      </div>
                      <div className=" items-center py-3 px-2 text-center flex justify-center">
                        <img className="w-[20px] h-[20px] rounded-full mr-2" src={item.Avatar || "https://t3.ftcdn.net/jpg/00/64/67/80/360_F_64678017_zUpiZFjj04cnLri7oADnyMH0XBYyQghG.jpg"} alt="" />
                        
                        {item.Infor.HoTen}
                      </div>
                      <div className=" py-3 px-2 text-center flex items-center justify-center">
                        {item.TenDangNhap}
                      </div>

                      <div className=" py-3 px-2 text-center flex items-center justify-center">
                        {item.LoaiTaiKhoan}
                      </div>
                      <div className=" py-3 px-2 text-center flex items-center justify-center">
                        <div
                          onClick={() => {
                            setModal(true);
                            setModalStatus("View");
                            setIdAccount(item.IdTaiKhoan);
                          }}
                          className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                        >
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
                        {/* <div
                          onClick={() => {
                            setModal(true);
                            setModalStatus("Edit");
                            setIdAccount(item.IdTaiKhoan);
                          }}
                          className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                        >
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
                        </div> */}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
          {modal && (
            <AccountModal
              data={data}
              id={idAccount}
              status={modalStatus}
              setModal={setModal}
              setModalStatus={setModalStatus}
            />
          )}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default AdminAccount;
