import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getDataOnlyAdmin } from "../../utils/fetchApi";
import BillModal from "./BillModal";
const AdminBill = () => {
  const user = useSelector((state) => state.auth.login.currentUser);

  const [modal, setModal] = useState(false);
  const [modalStatus, setModalStatus] = useState();
  const [modalData, setModalData] = useState();

  const [billData, setBillData] = useState([]);
  const [bookingData, setBookingData] = useState([]);
  const [lichDatData, setLichDatData] = useState([]);
  const [dataStatus, setDataStatus] = useState("Thống kê");
  const [idLich, setIdLich] = useState();

  useEffect(() => {
    user.type === "admin" &&
      dataStatus === "Thống kê" &&
      getDataOnlyAdmin("http://localhost:8080/v1/bill/", user.token).then(
        (res) => {
          setBillData(res);
        }
      );
    user.type === "admin" &&
      dataStatus === "Theo lịch đặt" &&
      getDataOnlyAdmin("http://localhost:8080/v1/booking/", user.token).then(
        (res) => {
          const data = res.filter((item)=>{
              return item.DaThanhToan === 0
          })
          setBookingData(data);
          
        }
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modal, dataStatus, modalStatus]);

  return (
    <>
      <div className="flex flex-col w-full max-w-[80vw] p-4">
        <div className="w-full py-4 grid grid-cols-3">
          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => {
                setDataStatus("Thống kê");
              }}
              className="h-full py-2 px-6 bg-gray-400 flex justify-center items-center text-white"
            >
              Thống kê
            </button>
          </div>
          <div className="flex items-center justify-center">
            <input
              type="text"
              placeholder="search...."
              className="h-full w-[250px] border-[2px] border-gray-200 rounded-xl outline-none p-2 "
            />
          </div>
          <div className="flex items-center justify-end gap-2">
            <button
              type="button"
              className="h-full py-2 px-6 bg-green-600 flex justify-center items-center text-white"
              onClick={() => {
                setDataStatus("Theo lịch đặt");
              }}
            >
          
              Theo Lịch Đặt
            </button>
            <button
              type="button"
              className="h-full py-2 px-6 bg-green-600 flex justify-center items-center text-white"
              onClick={() => {
                setModalStatus("Add Empty");
                setModal(true);
              }}
            >
              <box-icon name="plus" color="#ffffff"></box-icon>
              Hóa Đơn Trống
            </button>
          </div>
        </div>
        {dataStatus === "Thống kê" && (
          <div className="w-full  font-sans overflow-hidden">
            <div className="w-full ">
              <div className="w-full grid grid-cols-5">
                <div className="bg-gray-300 text-gray-600 uppercase text-sm leading-normal text-center font-bold py-3 ">
                  STT
                </div>
                <div className="bg-gray-300 text-gray-600 uppercase text-sm leading-normal text-center font-bold py-3">
                  Ngày Tạo
                </div>
                <div className="bg-gray-300 text-gray-600 uppercase text-sm leading-normal text-center font-bold py-3">
                  Giờ Tạo
                </div>

                <div className="bg-gray-300 text-gray-600 uppercase text-sm leading-normal text-center font-bold py-3">
                  Tổng Tiền (VND)
                </div>
                <div className="bg-gray-300 text-gray-600 uppercase text-sm leading-normal text-center font-bold py-3"></div>
              </div>
              <div className="w-full max-h-[65vh] overflow-y-auto">
                {billData?.map((item,index) => {
                  return (
                    <div
                      key={item.IdHoaDon}
                      className="w-full grid grid-cols-5 h-[70px] border-b border-gray-200 hover:bg-gray-100"
                    >
                      <div className=" items-center py-3 px-2 text-center flex justify-center">
                        {index}
                      </div>
                      <div className=" items-center py-3 px-2  flex justify-center text-center ">
                        {item?.NgayTaoHoaDon?.slice(0, 10)}
                      </div>
                      <div className=" py-3 px-2 text-center flex items-center justify-center">
                        {item?.GioTaoHoaDon?.slice(11, 16)}
                      </div>

                      <div className=" py-3 px-2 text-center flex items-center justify-center">
                        {item.TongTien.toLocaleString()}
                      </div>
                      <div className=" py-3 px-2 text-center flex items-center justify-center">
                        <div
                          onClick={() => {
                            setModalStatus("View");
                            setModalData(item);
                            setIdLich(item.IdLich);
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
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {dataStatus === "Theo lịch đặt" && (
          <div className="w-full  font-sans overflow-hidden">
            <div className="w-full ">
              <div className="w-full grid grid-cols-5">
                <div className="bg-gray-300 text-gray-600 uppercase text-sm leading-normal text-center font-bold py-3 ">
                  ID Lịch
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
                {bookingData?.map((item) => {
                  return (
                    <div
                      key={item.IdLich}
                      className="w-full grid grid-cols-5 h-[70px] border-b border-gray-200 hover:bg-gray-100"
                    >
                      <div className=" py-3 px-2 text-center flex items-center justify-center">
                        {item.IdLich}
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
                            setLichDatData(item);
                            setModalStatus("Add");
                            setIdLich(item.IdLich);
                            setModal(true);
                          }}
                          class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                        >
                          <box-icon size={"sm"} name="plus-circle"></box-icon>
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
        <BillModal
          setModal={setModal}
          status={modalStatus}
          data={modalData}
          IdLich={idLich}
          lichDatData={lichDatData}
        />
      )}
    </>
  );
};

export default AdminBill;
