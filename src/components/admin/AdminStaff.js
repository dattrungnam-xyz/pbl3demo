import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getDataOnlyAdmin } from "../../utils/fetchApi";
import StaffModal from "./StaffModal";

const AdminStaff = () => {
  const user = useSelector((state) => state.auth.login.currentUser);

  const [modal, setModal] = useState(false);
  const [modalStatus, setModalStatus] = useState();
  const [idStaff, setIdStaff] = useState();
  const [nameFilter, setNameFilter] = useState();

  const [staffData, setStaffData] = useState([]);
  useEffect(() => {
    user.type === "admin" &&
      getDataOnlyAdmin("http://localhost:8080/v1/staff/", user.token).then(
        (res) => {
          console.log(res);
          setStaffData(
            res.filter((item) => {
              return item.LoaiNhanVien;
            })
          );
        }
      );
  }, [modal]);
  return (
    <>
      <div className="flex flex-col w-full max-w-[80vw] p-4">
        <div className="w-full py-4 grid grid-cols-3">
          <div className="flex gap-4"></div>
          <div className="flex items-center justify-center">
            <input
              type="text"
              placeholder="search...."
              className="h-full w-[250px] border-[2px] border-gray-200 rounded-xl outline-none p-2 "
              value={nameFilter}
              onChange={(e) => {
                setNameFilter(e.target.value);
              }}
            />
          </div>
          <div className="flex items-center justify-end">
            <button
              type="button"
              className="h-full py-2 px-6 bg-green-600 flex justify-center items-center text-white"
              onClick={() => {
                setModalStatus("Add");
                setIdStaff();
                setModal(true);
              }}
            >
              <box-icon name="plus" color="#ffffff"></box-icon>
              Add
            </button>
          </div>
        </div>

        <div className="w-full  font-sans overflow-hidden">
          <div className="w-full ">
            <div className="w-full grid grid-cols-5">
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
                Loại Nhân Viên
              </div>
              <div className="bg-gray-300 text-gray-600 uppercase text-sm leading-normal text-center font-bold py-3"></div>
            </div>
            <div className="w-full max-h-[65vh] overflow-y-auto">
              {staffData
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
                      key={item.IdNhanVien}
                      className="w-full grid grid-cols-5 h-[70px] border-b border-gray-200 hover:bg-gray-100"
                    >
                      <div className=" items-center py-3 px-2 text-center flex justify-center">
                        {item.IdNhanVien}
                      </div>
                      <div className=" items-center py-3 px-2  flex justify-center text-center ">
                        {item.HoTen}
                      </div>
                      <div className=" py-3 px-2 text-center flex items-center justify-center">
                        {item.SoDienThoai}
                      </div>

                      <div className=" py-3 px-2 text-center flex items-center justify-center">
                        {item.LoaiNhanVien === "1" ? "Thợ cắt tóc" : "Kế toán"}
                      </div>
                      <div className=" py-3 px-2 text-center flex items-center justify-center">
                        <div
                          onClick={() => {
                            setModalStatus("View");
                            setIdStaff(item.IdNhanVien);
                            setModal(true);
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
                        <div
                          onClick={() => {
                            setModalStatus("Edit");
                            setIdStaff(item.IdNhanVien);
                            setModal(true);
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
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
      {modal && (
        <StaffModal
          data={staffData}
          status={modalStatus}
          IdNhanVien={idStaff}
          setModal={setModal}
        />
      )}
    </>
  );
};

export default AdminStaff;
