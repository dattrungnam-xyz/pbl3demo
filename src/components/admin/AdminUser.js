import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getDataOnlyAdmin } from "../../utils/fetchApi";

const AdminUser = () => {
  const user = useSelector((state) => state.auth.login.currentUser);

  const [userData, setUserData] = useState([]);
  const [nameFilter, setNameFilter] = useState();
  useEffect(() => {
    user.type === "admin" &&
      getDataOnlyAdmin("http://localhost:8080/v1/user/", user.token).then(
        (res) => {
          console.log(res);
          setUserData(res);
        }
      );
  }, []);
  return (
    <>
      <div className="flex flex-col w-full max-w-[80vw] p-4">
        <div className="w-full py-4 grid grid-cols-3">
          <div className="flex gap-4"></div>
          <div className="flex items-center justify-center">
            <input
              value={nameFilter}
              onChange={(e) => {
                setNameFilter(e.target.value);
              }}
              type="text"
              placeholder="search...."
              className="h-full w-[250px] border-[2px] border-gray-200 rounded-xl outline-none p-2 "
            />
          </div>
        </div>

        <div className="w-full  font-sans overflow-hidden">
          <div className="w-full ">
            <div className="w-full grid grid-cols-4">
              <div className="bg-gray-300 text-gray-600 uppercase text-sm leading-normal text-center font-bold py-3 ">
                ID
              </div>
              <div className="bg-gray-300 text-gray-600 uppercase text-sm leading-normal text-center font-bold py-3">
                Họ Tên
              </div>
              <div className="bg-gray-300 text-gray-600 uppercase text-sm leading-normal text-center font-bold py-3">
                Số Điện Thoại
              </div>

              <div className="bg-gray-300 text-gray-600 uppercase text-sm leading-normal text-center font-bold py-3">
                Địa chỉ
              </div>
            </div>
            <div className="w-full max-h-[65vh] overflow-y-auto">
              {userData
                ?.filter((item) => {
                  if (nameFilter) {
                    return item.HoTen.toLowerCase().includes(nameFilter.toLowerCase());
                  } else {
                    return item;
                  }
                })
                ?.map((item) => {
                  return (
                    <div
                      key={item.IdKhachHang}
                      className="w-full grid grid-cols-4 h-[70px] border-b border-gray-200 hover:bg-gray-100"
                    >
                      <div className=" py-3 px-2 text-center flex items-center justify-center">
                        {item.IdKhachHang}
                      </div>
                      <div className=" items-center py-3 px-2 text-center flex justify-center">
                        {item.HoTen}
                      </div>
                      <div className=" items-center py-3 px-2  flex justify-center text-center ">
                        {item.SoDienThoai}
                      </div>
                      <div className=" py-3 px-2 text-center flex items-center justify-center">
                        {item.DiaChi}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminUser;
