import React, { useState, useEffect } from "react";
import { getDataWithToken } from "../../utils/fetchApi";
import { useSelector } from "react-redux";

const BookingModal = ({ status, setModal, modalData }) => {
  const user = useSelector((state) => state.auth.login.currentUser);
  const [serviceData, setServiceData] = useState([]);

  const handleRemove = async () => {
    await fetch("http://localhost:8080/v1/booking/remove", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        token: `${user.token}`,
      },
      body: JSON.stringify({
        IdLich: modalData.IdLich,
        IdNhanVien: modalData.IdNhanVien,
        NgayCat: modalData.NgayCat,
        IdGioCat: modalData.IdGioCat,
        TongThoiGian: modalData.TongThoiGian,
      }),
    });

    await setModal(false);
  };

  useEffect(() => {
    modalData &&
      getDataWithToken(
        `http://localhost:8080/v1/service/schedule/${modalData.IdLich}`,
        user.token
      ).then((res) => {
        setServiceData(res);
        console.log(modalData);
      });
  }, []);

  return (
    <>
      {status === "View" && (
        <div
          onClick={() => {
            setModal(false);
          }}
          className="fixed top-0 right-0 left-0 bottom-0 bg-black/10 z-50 flex items-center justify-center"
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="w-[700px] flex flex-col bg-gray-200 rounded relative border border-black "
          >
            <div
              onClick={() => {
                setModal(false);
              }}
              className=" absolute top-0 right-0 font-bold text-xl w-[25px] h-[30px] bg-red-400 rounded-tr text-white text-center"
            >
              x
            </div>
            <div className="text-xl font-bold mt-5 text-center mb-5">
              Chi Tiết Lịch Đặt
            </div>
            <div className="grid grid-cols-2">
              <div>
                <div class="w-full px-4 mb-3">
                  <label className="ml-4 ">Người Đặt</label>
                  <div className="flex gap-2 items-center justify-start py-3 pl-8 pr-10 mt-2 bg-white  rounded-2xl hover:ring-1 ">
                    <img
                      className="w-[20px] h-[20px] rounded-full border "
                      src={
                        modalData.AvatarKH
                          ? modalData.AvatarKH
                          : "https://t3.ftcdn.net/jpg/00/64/67/80/360_F_64678017_zUpiZFjj04cnLri7oADnyMH0XBYyQghG.jpg"
                      }
                      alt=""
                    />
                    <p>{modalData.HoTenKH}</p>
                  </div>
                </div>
                <div class="w-full px-4 mb-3">
                  <label className="ml-4 ">Thợ Cắt Tóc</label>
                  <div className="flex gap-2 items-center justify-start py-3 pl-8 pr-10 mt-2 bg-white  rounded-2xl  hover:ring-1 ">
                    <img
                      className="w-[20px] h-[20px] rounded-full border "
                      src={
                        modalData.AvatarNV
                          ? modalData.AvatarNV
                          : "https://t3.ftcdn.net/jpg/00/64/67/80/360_F_64678017_zUpiZFjj04cnLri7oADnyMH0XBYyQghG.jpg"
                      }
                      alt=""
                    />
                    <p>{modalData.HoTenNV}</p>
                  </div>
                </div>
                <div class="w-full px-4 mb-3">
                  <label className="ml-4 ">Ngày Đặt Lịch</label>

                  <div className="flex gap-2 items-center justify-start py-3 pl-8 pr-10 mt-2 bg-white  rounded-2xl  hover:ring-1 ">
                    <p>{modalData.NgayDat.slice(0, 10)}</p>
                  </div>
                </div>
                <div class="w-full px-4 mb-3">
                  <label className="ml-4 ">Ngày Cắt</label>

                  <div className="flex gap-2 items-center justify-start py-3 pl-8 pr-10 mt-2 bg-white  rounded-2xl  hover:ring-1 ">
                    <p>{modalData.NgayCat.slice(0, 10)}</p>
                  </div>
                </div>
              </div>
              <div>
                <div class="w-full px-4 mb-3">
                  <label className="ml-4 ">Giờ cắt</label>

                  <div className="flex gap-2 items-center justify-start py-3 pl-8 pr-10 mt-2 bg-white  rounded-2xl  hover:ring-1 ">
                    <p>{modalData.GioCat}</p>
                  </div>
                </div>

                <div class="w-full px-4 mb-3">
                  <label className="ml-4 ">Dịch Vụ Đặt</label>

                  <div className="h-[230px] overflow-y-auto gap-2 items-center justify-start py-3 pl-8 pr-10 mt-2 bg-white  rounded-2xl  hover:ring-1 ">
                    {serviceData?.map((item) => {
                      return <div className="py-1">{item.TenDichVu}</div>;
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {status === "Remove" && (
        <div >
          
          <div
            onClick={() => {
              setModal(false);
            }}
            className=" fixed top-0 right-0 left-0 bottom-0 bg-black/10 z-50 flex items-center justify-center"
          >
            <div
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="border w-[200px] h-[200px] bg-gray-300 relative"
            >
              <div
                onClick={() => {
                  setModal(false);
                }}
                className=" absolute top-0 right-0 font-bold text-xl w-[25px] h-[30px] bg-red-400 rounded-tr text-white text-center"
              >
                x
              </div>
              <div
                className=" mt-6 text-md font-semibold
             p-4"
              >
                Bạn có chắc chắn xóa lịch đặt này không.
              </div>

              <div className=" px-4 py-2 flex justify-between">
                <button
                  onClick={handleRemove}
                  className="py-2 px-5 bg-red-500 rounded"
                >
                  Xóa
                </button>
                <button
                  onClick={setModal}
                  false
                  className="py-2 px-5  bg-blue-500 rounded"
                >
                  Hủy
                </button>
              </div>
            </div>
          </div>
          
        </div>
      )}
    </>
  );
};

export default BookingModal;
