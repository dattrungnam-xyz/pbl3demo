import React, { useEffect, useState } from "react";
import { BookingInforModal, UserNavbar } from "../components";
import { useSelector } from "react-redux";
import { getDataWithToken } from "../utils/fetchApi";
import { Link } from "react-router-dom";

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

  const [filter, setFilter] = useState("All");

  const handleFilterDay = (NgayCat) => {
    const date = new Date(NgayCat.slice(0, 10));
    const now = new Date();
    const month = now.getMonth() + 1;
    const monthtemp = month.toString().length == "1" ? "0" + month : month;

    const datetemp =
      now.getDate().toString().length == "1"
        ? "0" + now.getDate()
        : now.getDate();
    const today = new Date(`${now.getFullYear()}-${monthtemp}-${datetemp}`);

    return date.getTime() >= now.getTime();
  };
  const handleFilterToDay = (NgayCat) => {
    const date = new Date(NgayCat.slice(0, 10));
    const now = new Date();
    const month = now.getMonth() + 1;
    const monthtemp = month.toString().length == "1" ? "0" + month : month;

    const datetemp =
      now.getDate().toString().length == "1"
        ? "0" + now.getDate()
        : now.getDate();
    const today = new Date(`${now.getFullYear()}-${monthtemp}-${datetemp}`);

    return date.getTime() == today.getTime();
  };
  useEffect(() => {
    user?.type === "user" &&
      getDataWithToken(
        `http://localhost:8080/v1/booking/user/${user.id}`,
        user.token
      ).then((res) => {
        const data = res.data.filter((item) => {
          if (filter === "All") {
            return item;
          } else if (filter === "Đã cắt") {
            return !handleFilterDay(item.NgayCat);
          } else if (filter === "Chưa cắt") {
            return handleFilterDay(item.NgayCat);
          } else if (filter === "Ngày hôm nay") {
            return  handleFilterToDay(item.NgayCat);
          }
          else{
            return item;
          }
        });
        console.log(data);
        setData(data);
      });
    user?.type === "staff" &&
      getDataWithToken(
        `http://localhost:8080/v1/booking/staff/${user.id}`,
        user.token
      ).then((res) => {
        const data = res.data.filter((item) => {
          if (filter === "All") {
            return item;
          } else if (filter === "Đã cắt") {
            return !handleFilterDay(item.NgayCat);
          } else if (filter === "Chưa cắt") {
            return handleFilterDay(item.NgayCat);
          } else if (filter === "Ngày hôm nay") {
            return handleFilterToDay(item.NgayCat);
          } else {
            return item;
          }
        });
        console.log(data);
        setData(data);
      });
  }, [modal, filter]);
  return (
    <>
      <UserNavbar />
      {user && (
        <section className="pt-[60px] w-full  flex flex-col items-center justify-start min-h-screen">
          <div className="w-full max-w-[1200px]  py-4 grid grid-cols-3">
            <div className="flex gap-4">
              <button
                onClick={() => {
                  setFilter("All");
                }}
                type="button"
                className={`h-full py-2 px-2 rounded bg-gray-400 flex justify-center items-center text-white hover:opacity-90 ${
                  filter === "All" && "bg-gray-500"
                }`}
              >
                All
              </button>
              <button
                onClick={() => {
                  setFilter("Đã cắt");
                }}
                type="button"
                className={`h-full py-2 px-2 rounded bg-gray-400 flex justify-center items-center text-white hover:opacity-90 ${
                  filter === "Đã cắt" && "bg-gray-500"
                }`}
              >
                Đã cắt
              </button>
              <button
                onClick={() => {
                  setFilter("Chưa cắt");
                }}
                type="button"
                className={`h-full py-2 px-2 rounded bg-gray-400 flex justify-center items-center text-white hover:opacity-90 ${
                  filter === "Chưa cắt" && "bg-gray-500"
                }`}
              >
                Chưa cắt
              </button>
              <button
                onClick={() => {
                  setFilter("Ngày hôm nay");
                }}
                type="button"
                className={`h-full py-2 px-2 rounded bg-gray-400 flex justify-center items-center text-white hover:opacity-90 ${
                  filter === "Ngày hôm nay" && "bg-gray-500"
                }`}
              >
                Ngày hôm nay
              </button>
            </div>
            <div className="flex items-center justify-center">
              {/* <input
                type="text"
                placeholder="search...."
                className="h-full w-[250px] border-[2px] border-gray-200 rounded-xl outline-none p-2 "
                onChange={(e) => {
                  setUsernameFilter(e.target.value);
                }}
                value={usernameFilter}
              /> */}
            </div>
            <div className="flex items-center justify-end"></div>
          </div>

          <div className="w-full max-w-[1200px] h-[380px] ">
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
                        src={
                          item.Avatar
                            ? item.Avatar
                            : "https://t3.ftcdn.net/jpg/00/64/67/80/360_F_64678017_zUpiZFjj04cnLri7oADnyMH0XBYyQghG.jpg"
                        }
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
                      {user?.type === "user" &&
                        !item.DaDanhGia &&
                        !handleFilterDay(item.NgayCat) && (
                          <div
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
                        )}
                      {user?.type === "user" &&
                        handleFilterDay(item.NgayCat) && (
                          <Link
                            to={`/EditBooking/${item.IdLich}`}
                            onClick={() => {
                              // setModalStatus("Rate");
                              // setId(item.IdLich);
                              // setHasRate(item.DaDanhGia);
                              // setModal(true);
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
                                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                              />
                            </svg>
                          </Link>
                        )}
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
                      {user?.type === "user" &&
                        handleFilterDay(item.NgayCat) && (
                          <div
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
                          </div>
                        )}
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
