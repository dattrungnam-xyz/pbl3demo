import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getDataOnlyAdmin } from "../../utils/fetchApi";
import RateModal from "./RateModal";

const AdminRate = () => {
  const user = useSelector((state) => state.auth.login.currentUser);
  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState({});

  const [rateData, setRateData] = useState([]);

  const [filter, setFilter] = useState();
  useEffect(() => {
    user.type === "admin" &&
      getDataOnlyAdmin(
        "http://localhost:8080/v1/booking/rating",
        user.token
      ).then((res) => {
        setRateData(res);
      });
  }, []);
  return (
    <>
      <div className="flex flex-col w-full max-w-[80vw] p-4">
        <div className="w-full py-4 grid grid-cols-3">
          <div className="flex gap-4"></div>
          <div className="flex items-center justify-center">
            <input
            value={filter}
            onChange={(e)=>{
                setFilter(e.target.value)
            }}  
              type="text"
              placeholder="search...."
              className="h-full w-[250px] border-[2px] border-gray-200 rounded-xl outline-none p-2 "
            />
          </div>
        </div>

        <div className="w-full  font-sans overflow-hidden">
          <div className="w-full ">
            <div className="w-full grid grid-cols-6">
              <div className="bg-gray-300 text-gray-600 uppercase text-sm leading-normal text-center font-bold py-3 ">
                STT
              </div>
              <div className="bg-gray-300 text-gray-600 uppercase text-sm leading-normal text-center font-bold py-3">
                Sao Dịch Vụ
              </div>
              <div className="bg-gray-300 text-gray-600 uppercase text-sm leading-normal text-center font-bold py-3">
                Mô Tả Dịch Vụ
              </div>

              <div className="bg-gray-300 text-gray-600 uppercase text-sm leading-normal text-center font-bold py-3">
                Sao Nhân Viên
              </div>
              <div className="bg-gray-300 text-gray-600 uppercase text-sm leading-normal text-center font-bold py-3">
                Mô Tả Nhân Viên
              </div>
              <div className="bg-gray-300 text-gray-600 uppercase text-sm leading-normal text-center font-bold py-3"></div>
            </div>
            <div className="w-full max-h-[65vh] overflow-y-auto">
              {rateData?.filter((item)=>{
                if(filter)
                {
                  return item.IdLich.toString().includes(filter)
                }
                else{
                  return item
                }
              })?.map((item,index) => {
                return (
                  <div
                    key={item.IdLich}
                    className="w-full grid grid-cols-6 h-[70px] border-b border-gray-200 hover:bg-gray-100"
                  >
                    <div className=" py-3 px-2 text-center flex items-center justify-center">
                      {index}
                    </div>
                    <div className=" items-center py-3 px-2 text-center flex justify-center">
                      {/* <img
                      className="mr-2 w-[20px] h-[20px] rounded-full"
                      src={
                        item.AvatarKH
                          ? item.AvatarKH
                          : "https://t3.ftcdn.net/jpg/00/64/67/80/360_F_64678017_zUpiZFjj04cnLri7oADnyMH0XBYyQghG.jpg"
                      }
                      alt=""
                    />{" "}
                    {item.HoTenKH} */}
                      {item.SoSaoDV}
                    </div>
                    <div className=" items-center py-3 px-2  flex justify-center text-center max-h-[64px] text-truncate-2 overflow-hidden">
                      {/* <img
                      className="mr-2 w-[20px] h-[20px] rounded-full"
                      src={
                        item.AvatarNV
                          ? item.AvatarNV
                          : "https://t3.ftcdn.net/jpg/00/64/67/80/360_F_64678017_zUpiZFjj04cnLri7oADnyMH0XBYyQghG.jpg"
                      }
                      alt=""
                    />{" "}
                    {item.HoTenNV} */}
                      {item.MoTaDV}
                    </div>
                    <div className=" py-3 px-2 text-center flex items-center justify-center">
                      {/* {item.GioCat} {item.NgayCat?.slice(0, 10)} */}
                      {item.SoSaoNV}
                    </div>
                    <div className=" py-3 px-2 text-center flex items-center justify-center max-h-[64px] text-truncate-2 overflow-hidden">
                      {/* {item.GioCat} {item.NgayCat?.slice(0, 10)} */}
                      {item.MoTaNV}
                    </div>
                    <div className="flex items-center justify-center">
                      <div
                        onClick={() => {
                          setModalData(item);
                          setModal(true);
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
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {modal && <RateModal setModal={setModal} data={modalData} />}
    </>
  );
};

export default AdminRate;
