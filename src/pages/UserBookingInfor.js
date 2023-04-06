import React, { useEffect, useState } from "react";
import { BookingInforModal, UserNavbar } from "../components";
import { useSelector } from "react-redux";
import { getDataWithToken } from "../utils/fetchApi";

const UserBookingInfor = () => {
  const user = useSelector((state) => state.auth.login.currentUser);
  const [data, setData] = useState([]);
  const [id, setId] = useState();
  const [modal, setModal] = useState(false);
  const [modalStatus, setModalStatus] = useState();

  const [hasRate, setHasRate] = useState(false);

  const [dataRemove, setDataRemove] = useState({
    IdLich: "",
    IdNhanVien: "",
    NgayCat: "",
    IdGioCat: "",
    TongThoiGian: "",
  });

  useEffect(() => {
    user?.type === "user" &&
      getDataWithToken(
        `http://localhost:8080/v1/booking/user/${user.id}`,
        user.token
      ).then((res) => setData(res.data));
    user?.type === "staff" &&
      getDataWithToken(
        `http://localhost:8080/v1/booking/staff/${user.id}`,
        user.token
      ).then((res) => setData(res.data));
  }, [modal]);
  return (
    <>
      <UserNavbar />
      {user && (
        <section className="pt-[62px] w-full  flex items-center justify-center min-h-screen">
          <div className="w-full max-w-[1200px] ">
            <div className="w-full grid grid-cols-5">
              <div className="bg-gray-300 text-gray-600 uppercase text-sm leading-normal text-center font-bold py-3 ">
                STT
              </div>
              <div className="bg-gray-300 text-gray-600 uppercase text-sm leading-normal text-center font-bold py-3">
                {user?.type === "user" ? "Nhân Viên" : "Khách Hàng"}
              </div>
              <div className="bg-gray-300 text-gray-600 uppercase text-sm leading-normal text-center font-bold py-3">
                Ngày Cắt
              </div>
              <div className="bg-gray-300 text-gray-600 uppercase text-sm leading-normal text-center font-bold py-3">
                Giờ Cắt
              </div>
              <div className="bg-gray-300 text-gray-600 uppercase text-sm leading-normal text-center font-bold py-3"></div>
            </div>
            <div className="w-full max-h-[65vh] min-h-[60vh] overflow-y-auto">
              {data?.map((item, index) => {
                return (
                  <div className="w-full grid grid-cols-5 h-[70px] border-b border-gray-200 hover:bg-gray-100">
                    <div className=" items-center py-3 px-2 text-center flex justify-center">
                      {index + 1}
                    </div>

                    <div className=" py-3 px-2 text-center flex items-center justify-center">
                      <img
                        className="w-[20px] h-[20px] rounded-full mr-2"
                        src={item.Avatar}
                        alt=""
                      />
                      {item.HoTen}
                    </div>
                    <div className=" py-3 px-2 text-center flex items-center justify-center">
                      {item.NgayCat.slice(0, 10)}
                    </div>

                    <div className=" py-3 px-2 text-center flex items-center justify-center">
                      {item.GioCat}
                    </div>
                    <div className=" py-3 px-2 text-center flex items-center justify-center">
                      {
                        user?.type === "user" && <div
                        onClick={() => {
                          setModalStatus("Rate");
                          setId(item.IdLich);
                          setHasRate(item.DaDanhGia);

                          setModal(true);
                        }}
                        className="w-4 mr-2 transform  hover:scale-110"
                      >
                        <box-icon
                          size={"xs"}
                          type="solid"
                          name="calendar-minus"
                        ></box-icon>
                      </div>
                      }
                      
                      <div
                        onClick={() => {
                          setModalStatus("View");
                          setId(item.IdLich);
                          setModal(true);
                        }}
                        className="w-4 mr-2 transform  hover:scale-110"
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
                      { user?.type === "user" && <div
                        onClick={() => {
                          setModalStatus("Remove");
                          setDataRemove({
                            IdLich: item.IdLich,
                            IdNhanVien: item.IdNhanVien,
                            NgayCat: item.NgayCat.slice(0, 10),
                            IdGioCat: item.IdGioCat,
                            TongThoiGian: item.TongThoiGian,
                          });
                          setModal(true);
                        }}
                        class="w-4 mr-2 transform  hover:scale-110"
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
                      </div> }
                      
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {modal && (
        <BookingInforModal
          status={modalStatus}
          dataRemove={dataRemove}
          setModal={setModal}
          idLich={id}
          hasRate={hasRate}
        />
      )}
    </>
  );
};

export default UserBookingInfor;
