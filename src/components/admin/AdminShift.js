import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getDataOnlyAdmin } from "../../utils/fetchApi";
import ShiftModal from "./ShiftModal";

const AdminShift = () => {
  const user = useSelector((state) => state.auth.login.currentUser);
  const [dataState, setDataState] = useState("Thống kê ca làm");
  const [date, setDate] = useState(7);
  const [modal, setModal] = useState(false);
  const [shiftData, setShiftData] = useState([]);
  // const [shiftDataModal, setShiftDataModal] = useState({});
  const [staffData, setStaffData] = useState([]);
  const [staffDataModal, setStaffDataModal] = useState({});

  useEffect(() => {
    const d = new Date("2023-04-12");

    // setDate(+d.getDay());

    user.type === "admin" &&
      getDataOnlyAdmin("http://localhost:8080/v1/shift/", user.token).then(
        (res) => {
          setShiftData(res);
          console.log(res);
        }
      );

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
    <div className="flex flex-col w-full max-w-[80vw] p-4">
      <div className="w-full py-4 grid grid-cols-3">
        <div className="flex gap-4">
          <button
            type="button"
            onClick={() => {
              setDataState("Thống kê ca làm");
            }}
            className="h-full py-2 px-6 bg-gray-400 flex justify-center items-center text-white"
          >
            Thống Kê Ca Làm
          </button>
        </div>
        <div className="flex items-center justify-center">
          {dataState === "Thống kê ca làm" && (
            <div className="w-full  relative   flex gap-3 items-center justify-center">
              <label className="">Chọn Thứ Ngày:</label>
              {/* <div className="absolute right-0 top-[50%] translate-y-1 -translate-x-[10px] ">
     <box-icon name="chevron-down"></box-icon>
   </div> */}

              <select
                onChange={(e) => {
                  setDate(+e.target.value);
                }}
                className=" py-2 pl-7 pr-3 bg-slate-200  rounded-2xl hover:ring-1 outline-blue-500"
              >
                <option selected={date === 7 ? true : false} value="7">
                  Tất cả
                </option>
                <option selected={date === 1 ? true : false} value="1">
                  Thứ 2
                </option>
                <option selected={date === 2 ? true : false} value="2">
                  Thứ 3
                </option>
                <option selected={date === 3 ? true : false} value="3">
                  Thứ 4
                </option>
                <option selected={date === 4 ? true : false} value="4">
                  Thứ 5
                </option>
                <option selected={date === 5 ? true : false} value="5">
                  Thứ 6
                </option>
                <option selected={date === 6 ? true : false} value="6">
                  Thứ 7
                </option>
                <option selected={date === 0 ? true : false} value="0">
                  Chủ Nhật
                </option>
              </select>
            </div>
          )}
        </div>
        <div className="flex items-center justify-end">
          <button
            type="button"
            className="h-full py-2 px-6 bg-green-600 flex justify-center items-center text-white"
            onClick={() => {
              setDataState("Chỉnh sửa ca làm");
            }}
          >
            <box-icon name="pencil" type="solid" color="#ffffff"></box-icon>
            Chỉnh Sửa Ca Làm
          </button>
        </div>
      </div>

      <div className="w-full  font-sans overflow-hidden">
        {dataState === "Thống kê ca làm" && (
          <>
            {date !== 7 && (
              <div className="w-full max-w-[80vw]  font-sans overflow-hidden">
                <div className="w-full ">
                  <div className="w-full grid grid-cols-3">
                    <div className="bg-gray-300 border-r text-gray-600 uppercase text-sm leading-normal text-center font-bold py-3 ">
                      Sáng (7:00-12:00)
                    </div>
                    <div className="bg-gray-300 border-r text-gray-600 uppercase text-sm leading-normal text-center font-bold py-3">
                      Chiều (13:30 - 19:00)
                    </div>
                    <div className="bg-gray-300 text-gray-600 uppercase text-sm leading-normal text-center font-bold py-3">
                      Tối (20:00 - 22:30)
                    </div>
                  </div>
                  <div className="w-full max-h-[60vh] overflow-y-auto">
                    <div className="w-full grid grid-cols-3  border-b border-gray-200 ">
                      <div className=" border-x items-center py-3 px-2 text-center flex flex-col justify-center hover:bg-gray-100 ">
                        {shiftData
                          .filter((item) => {
                            return (
                              +item.Thu === date &&
                              item.Ca === 1 &&
                              item.AnCaLam === 0
                            );
                          })
                          .map((item) => {
                            return <div>{item.inforStaff[0].HoTen}</div>;
                          })}
                      </div>
                      <div className="border-x items-center py-3 px-2 text-center flex flex-col justify-center hover:bg-gray-100 ">
                        {shiftData
                          .filter((item) => {
                            return (
                              +item.Thu === date &&
                              item.Ca === 2 &&
                              item.AnCaLam === 0
                            );
                          })
                          .map((item) => {
                            return <div>{item.inforStaff[0].HoTen}</div>;
                          })}
                      </div>
                      <div className="border-x py-3 px-2 text-center flex items-center flex-col justify-center hover:bg-gray-100">
                        {shiftData
                          .filter((item) => {
                            return (
                              +item.Thu === date &&
                              item.Ca === 3 &&
                              item.AnCaLam === 0
                            );
                          })
                          .map((item) => {
                            return <div>{item.inforStaff[0].HoTen}</div>;
                          })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {date === 7 && (
              <div className="w-full max-w-[80vw]  font-sans overflow-hidden">
                <div className="w-full ">
                  <div className="w-full grid grid-cols-4">
                    <div className="bg-gray-300 border-r text-gray-600 uppercase text-sm leading-normal text-center font-bold py-3 ">
                      Thứ
                    </div>
                    <div className="bg-gray-300 border-r text-gray-600 uppercase text-sm leading-normal text-center font-bold py-3 ">
                      Sáng (7:00-12:00)
                    </div>
                    <div className="bg-gray-300 border-r text-gray-600 uppercase text-sm leading-normal text-center font-bold py-3">
                      Chiều (13:30 - 19:00)
                    </div>
                    <div className="bg-gray-300 text-gray-600 uppercase text-sm leading-normal text-center font-bold py-3">
                      Tối (20:00 - 22:30)
                    </div>
                  </div>
                  <div className="w-full max-h-[50vh] overflow-y-auto">
                    {Array.from(Array(7).keys()).map((date) => {
                      return (
                        <>
                          <div className="w-full grid grid-cols-4  border-b border-gray-200 ">
                            <div className=" border-x items-center py-3 px-2 text-center flex flex-col justify-center hover:bg-gray-100 ">
                              {date === 0 ? "Chủ Nhật" : `Thứ ${date + 1}`}
                            </div>
                            <div className=" border-x items-center py-3 px-2 text-center flex flex-col justify-center hover:bg-gray-100 ">
                              {shiftData
                                .filter((item) => {
                                  return (
                                    +item.Thu === date &&
                                    item.Ca === 1 &&
                                    item.AnCaLam === 0
                                  );
                                })
                                .map((item) => {
                                  return <div>{item.inforStaff[0].HoTen}</div>;
                                })}
                            </div>
                            <div className="border-x items-center py-3 px-2 text-center flex flex-col justify-center hover:bg-gray-100 ">
                              {shiftData
                                .filter((item) => {
                                  return (
                                    +item.Thu === date &&
                                    item.Ca === 2 &&
                                    item.AnCaLam === 0
                                  );
                                })
                                .map((item) => {
                                  return <div>{item.inforStaff[0].HoTen}</div>;
                                })}
                            </div>
                            <div className="border-x py-3 px-2 text-center flex items-center flex-col justify-center hover:bg-gray-100">
                              {shiftData
                                .filter((item) => {
                                  return (
                                    +item.Thu === date &&
                                    item.Ca === 3 &&
                                    item.AnCaLam === 0
                                  );
                                })
                                .map((item) => {
                                  return <div>{item.inforStaff[0].HoTen}</div>;
                                })}
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </>
        )}
        {dataState === "Chỉnh sửa ca làm" && (
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
                {staffData?.map((item) => {
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
                            setStaffDataModal(item);
                            setModal(true);
                          }}
                          className="w-4 mr-2 transform hover:text-purple-500 scale hover:scale-110"
                        >
                          <box-icon type="solid" name="calendar"></box-icon>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
      {modal && (
        <ShiftModal
          shiftData={shiftData}
          setModal={setModal}
          staffDataModal={staffDataModal}
        />
      )}
    </div>
  );
};

export default AdminShift;
