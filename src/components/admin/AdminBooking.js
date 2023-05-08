import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getDataOnlyAdmin } from "../../utils/fetchApi";
import BookingModal from "./BookingModal";

const AdminBooking = () => {
  const user = useSelector((state) => state.auth.login.currentUser);
  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState({});
  const [modalStatus, setModalStatus] = useState();
  const [bookingData, setBookingData] = useState([]);

  const [filter, setFilter] = useState();

  useEffect(() => {
    user.type === "admin" &&
      getDataOnlyAdmin("http://localhost:8080/v1/booking/", user.token).then(
        (res) => {
          setBookingData(res);
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
              value={filter}
              onChange={(e) => {
                setFilter(e.target.value);
              }}
              type="text"
              placeholder="search họ tên...."
              className="h-full w-[250px] border-[2px] border-gray-200 rounded-xl outline-none p-2 "
            />
          </div>
        </div>

        <div className="w-full  font-sans overflow-hidden">
          <div className="w-full ">
            <div className="w-full grid grid-cols-5">
              <div className="bg-gray-300 text-gray-600 uppercase text-sm leading-normal text-center font-bold py-3 ">
               STT
              </div>
              <div className="bg-gray-300 text-gray-600 uppercase text-sm leading-normal text-center font-bold py-3">
                Người Đặt
              </div>
              <div className="bg-gray-300 text-gray-600 uppercase text-sm leading-normal text-center font-bold py-3">
                Người Cắt
              </div>

              <div className="bg-gray-300 text-gray-600 uppercase text-sm leading-normal text-center font-bold py-3">
                Ngày Cắt
              </div>
              <div className="bg-gray-300 text-gray-600 uppercase text-sm leading-normal text-center font-bold py-3"></div>
            </div>
            <div className="w-full max-h-[65vh] overflow-y-auto">
              {bookingData
                ?.filter((item) => {
                  if (filter) {
                    return (
                      item.HoTenKH.toLowerCase().includes(
                        filter.toLowerCase()
                      ) ||
                      item.HoTenNV.toLowerCase().includes(
                        filter.toLowerCase()
                      ) 
                    );
                  } else {
                    return item;
                  }
                })
                ?.map((item,index) => {
                  return (
                    <div
                      key={item.IdLich}
                      className="w-full grid grid-cols-5 h-[70px] border-b border-gray-200 hover:bg-gray-100"
                    >
                      <div className=" py-3 px-2 text-center flex items-center justify-center">
                        {index}
                      </div>
                      <div className=" items-center py-3 px-2 text-center flex justify-start">
                        <img
                          className="mr-2 w-[20px] h-[20px] rounded-full"
                          src={
                            item.AvatarKH
                              ? item.AvatarKH
                              : "https://t3.ftcdn.net/jpg/00/64/67/80/360_F_64678017_zUpiZFjj04cnLri7oADnyMH0XBYyQghG.jpg"
                          }
                          alt=""
                        />{" "}
                        {item.HoTenKH}
                      </div>
                      <div className=" items-center py-3 px-2  flex justify-start text-center ">
                        <img
                          className="mr-2 w-[20px] h-[20px] rounded-full"
                          src={
                            item.AvatarNV
                              ? item.AvatarNV
                              : "https://t3.ftcdn.net/jpg/00/64/67/80/360_F_64678017_zUpiZFjj04cnLri7oADnyMH0XBYyQghG.jpg"
                          }
                          alt=""
                        />{" "}
                        {item.HoTenNV}
                      </div>
                      <div className=" py-3 px-2 text-center flex items-center justify-center">
                        {item.GioCat} {item.NgayCat?.slice(0, 10)}
                      </div>
                      <div className="flex items-center justify-center">
                        <div
                          onClick={() => {
                            setModal(true);
                            setModalStatus("View");
                            setModalData(item);
                          }}
                          class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
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
                            setModal(true);
                            setModalStatus("Remove");
                            setModalData(item);
                          }}
                          class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
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
      </div>
      {modal && (
        <BookingModal
          status={modalStatus}
          setModal={setModal}
          modalData={modalData}
        />
      )}
    </>
  );
};

export default AdminBooking;
