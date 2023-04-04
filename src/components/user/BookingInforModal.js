import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getDataWithToken } from "../../utils/fetchApi";

const BookingInforModal = ({
  status,
  dataRemove,
  setModal,
  idLich,
  hasRate,
}) => {
  const [data, setData] = useState([{}]);
  const [serviceData, setServiceData] = useState([{}]);

  const [staffStar, setStaffStar] = useState(0);
  const [serviceStar, setServiceStar] = useState(0);

  const [rateDescription, setRateDescription] = useState({
    MoTaDV: "",
    MoTaNV: "",
  });
  const [rateError, setRateError] = useState();
  const handleSubmitRate = async (e) => {
    e.preventDefault();
    if (staffStar === 0 || serviceStar === 0) {
      setRateError("Vui lòng đánh giá chất lượng nhân viên và dịch vụ.");
    } else {
      // fetch api đánh giá
      await fetch("http://localhost:8080/v1/booking/rating", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          token: `${user.token}`,
        },
        body: JSON.stringify({
          SoSaoNV: staffStar,
          SoSaoDV: serviceStar,
          IdLich: idLich,
          ...rateDescription,
        }),
      });
      handleModal()
    }
  };

  useEffect(() => {
    user?.type === "user" &&
      getDataWithToken(
        `http://localhost:8080/v1/booking/user/${user.id}`,
        user.token
      ).then((res) => {
        const data = res.data.filter((item) => {
          return item.IdLich === idLich;
        });
        setData(data);
      });
    user?.type === "staff" &&
      getDataWithToken(
        `http://localhost:8080/v1/booking/staff/${user.id}`,
        user.token
      ).then((res) => {
        const data = res.data.filter((item) => {
          return item.IdLich === idLich;
        });
        setData(data);
      });

    getDataWithToken(
      `http://localhost:8080/v1/service/schedule/${idLich}`,
      user.token
    ).then((res) => {
      setServiceData(res);
    });
  }, []);

  const user = useSelector((state) => state.auth.login.currentUser);

  const [message, setMessage] = useState();
  const handleRemove = async () => {
    await fetch("http://localhost:8080/v1/booking/remove", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        token: `${user.token}`,
      },
      body: JSON.stringify(dataRemove),
    });

    await setModal(false);
  };
  const handleModal = () => {
    setModal(false);
  };

  useEffect(() => {
    const NgayCat = new Date(dataRemove.NgayCat);
    const now = new Date();
    // 2 ngay : 172800000
    if (+NgayCat.getTime() - +now.getTime() < 172800000) {
      setMessage("Không được hủy lịch khi lịch đặt còn ít hơn 2 ngày");
    }
  }, [dataRemove]);

  return (
    <>
      {status === "View" && (
        <div>
          <div
            onClick={() => {
              handleModal();
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
                  handleModal();
                }}
                className=" absolute top-0 right-0 font-bold text-xl w-[25px] h-[30px] bg-red-400 rounded-tr text-white text-center"
              >
                x
              </div>
              <div className="text-xl font-bold mt-5 text-center mb-5">
                Lịch đặt chi tiết
              </div>
              <div className="grid grid-cols-2">
                <div>
                  <div class="w-full px-4 mb-3">
                    <label className="ml-4 " for="TenDichVu">
                      Tên Nhân Viên
                    </label>

                    <input
                      type="text"
                      value={data[0]?.HoTen}
                      class="w-full py-3 pl-8 pr-10 mt-2 bg-white  rounded-2xl hover:ring-1 outline-blue-500"
                      readOnly={status === "View" ? true : false}
                    />
                  </div>

                  <div class="w-full px-4 mb-3">
                    <label className="ml-4 " for="GiaTien">
                      Giờ cắt
                    </label>

                    <input
                      type="text"
                      value={data[0].GioCat}
                      readOnly={status === "View" ? true : false}
                      class="w-full py-3 pl-8 pr-10 mt-2 bg-white  rounded-2xl hover:ring-1 outline-blue-500"
                    />
                  </div>
                  <div class="w-full px-4 mb-3">
                    <label className="ml-4 " for="ThoiGian">
                      Ngày Đặt Lịch
                    </label>

                    <input
                      value={data[0].NgayDat?.slice(0, 10)}
                      readOnly={status === "View" ? true : false}
                      class="w-full py-3 pl-8 pr-10 mt-2 bg-white rounded-2xl hover:ring-1 outline-blue-500"
                    />
                  </div>
                </div>
                <div>
                  <div class="w-full px-4 mb-3">
                    <label className="ml-4 " for="ThoiGian">
                      Ngày Cắt
                    </label>

                    <input
                      value={data[0].NgayCat?.slice(0, 10)}
                      readOnly={status === "View" ? true : false}
                      class="w-full py-3 pl-8 pr-10 mt-2 bg-white rounded-2xl hover:ring-1 outline-blue-500"
                    />
                  </div>

                  <div class="w-full px-4 mb-3">
                    <label className="ml-4 " for="Description">
                      Dịch vụ
                    </label>

                    <div class="w-full h-[140px] grid grid-cols-2 overflow-y-auto overflow-hidden py-2 pl-8 pr-10 mt-2 bg-white rounded-2xl hover:ring-1 outline-blue-500">
                      {serviceData?.map((item) => {
                        return <div>{item.TenDichVu}</div>;
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {status === "Remove" && (
        <div
          onClick={() => {
            handleModal();
          }}
          className="fixed top-0 right-0 left-0 bottom-0 bg-black/10 z-50 flex items-center justify-center"
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className=" w-[200px] h-[200px] bg-gray-300 relative"
          >
            <div
              onClick={() => {
                handleModal();
              }}
              className=" absolute top-0 right-0 font-bold text-xl w-[25px] h-[30px] bg-red-400 rounded-tr text-white text-center"
            >
              x
            </div>
            <div
              className=" mt-6 text-md font-semibold
             p-4"
            >
              {message ? message : "Bạn có chắc chắn xóa lịch đặt này không."}
            </div>

            {!message && (
              <div className=" px-4 py-2 flex justify-between">
                <button
                  onClick={handleRemove}
                  className="py-2 px-5 bg-red-500 rounded"
                >
                  Xóa
                </button>
                <button
                  onClick={handleModal}
                  className="py-2 px-5  bg-blue-500 rounded"
                >
                  Hủy
                </button>
              </div>
            )}
          </div>
        </div>
      )}
      {status === "Rate" && !hasRate && (
        <div>
          <div
            onClick={() => {
              handleModal();
            }}
            className="fixed top-0 right-0 left-0 bottom-0 bg-black/10 z-50 flex items-center justify-center"
          >
            <form
              onClick={(e) => {
                e.stopPropagation();
              }}
              onSubmit={handleSubmitRate}
              className="w-[400px] flex flex-col bg-gray-200 rounded relative border border-black "
            >
              <div
                onClick={() => {
                  handleModal();
                }}
                className=" absolute top-0 right-0 font-bold text-xl w-[25px] h-[30px] bg-red-400 rounded-tr text-white text-center"
              >
                x
              </div>
              <div className="text-xl font-bold mt-5 text-center mb-5">
                Đánh Giá Dịch Vụ
              </div>
              <div className="grid grid-cols-1">
                <div>
                  <div class="w-full px-4 mb-3">
                    <label className="ml-4 " for="SoSaoNV">
                      Chất lượng Nhân Viên:
                    </label>

                    <div className="ml-4 mt-1">
                      <box-icon
                        onClick={() => {
                          setStaffStar(1);
                          setRateError();
                        }}
                        name="star"
                        type="solid"
                        color={staffStar < 1 ? "#585850" : "#e8f319"}
                      ></box-icon>
                      <box-icon
                        onClick={() => {
                          setStaffStar(2);
                          setRateError();
                        }}
                        name="star"
                        type="solid"
                        color={staffStar < 2 ? "#585850" : "#e8f319"}
                      ></box-icon>
                      <box-icon
                        onClick={() => {
                          setStaffStar(3);
                          setRateError();
                        }}
                        name="star"
                        type="solid"
                        color={staffStar < 3 ? "#585850" : "#e8f319"}
                      ></box-icon>
                      <box-icon
                        onClick={() => {
                          setStaffStar(4);
                          setRateError();
                        }}
                        name="star"
                        type="solid"
                        color={staffStar < 4 ? "#585850" : "#e8f319"}
                      ></box-icon>
                      <box-icon
                        onClick={() => {
                          setStaffStar(5);
                          setRateError();
                        }}
                        name="star"
                        type="solid"
                        color={staffStar < 5 ? "#585850" : "#e8f319"}
                      ></box-icon>
                    </div>
                  </div>
                  <div class="w-full px-4 mb-3">
                    <label className="ml-4 " for="MoTaNV">
                      Mô tả đánh giá về nhân viên:
                    </label>

                    <textarea
                      type="text"
                      name="MoTaNV"
                      id="MoTaNV"
                      rows="2"
                      cols="50"
                      value={rateDescription.MoTaNV}
                      onChange={(e) => {
                        setRateDescription({
                          ...rateDescription,
                          [e.target.name]: e.target.value,
                        });
                      }}
                      class="w-full h py-2 pl-8 pr-10 mt-2 bg-white rounded-2xl hover:ring-1 outline-blue-500"
                    />
                  </div>
                  <div class="w-full px-4 mb-3">
                    <label className="ml-4 ">Chất lượng Dịch Vụ:</label>

                    <div className="ml-4 mt-1">
                      <box-icon
                        onClick={() => {
                          setServiceStar(1);
                          setRateError();
                        }}
                        name="star"
                        type="solid"
                        color={serviceStar < 1 ? "#585850" : "#e8f319"}
                      ></box-icon>
                      <box-icon
                        onClick={() => {
                          setServiceStar(2);
                          setRateError();
                        }}
                        name="star"
                        type="solid"
                        color={serviceStar < 2 ? "#585850" : "#e8f319"}
                      ></box-icon>
                      <box-icon
                        onClick={() => {
                          setServiceStar(3);
                          setRateError();
                        }}
                        name="star"
                        type="solid"
                        color={serviceStar < 3 ? "#585850" : "#e8f319"}
                      ></box-icon>
                      <box-icon
                        onClick={() => {
                          setServiceStar(4);
                          setRateError();
                        }}
                        name="star"
                        type="solid"
                        color={serviceStar < 4 ? "#585850" : "#e8f319"}
                      ></box-icon>
                      <box-icon
                        onClick={() => {
                          setServiceStar(5);
                          setRateError();
                        }}
                        name="star"
                        type="solid"
                        color={serviceStar < 5 ? "#585850" : "#e8f319"}
                      ></box-icon>
                    </div>
                  </div>
                  <div class="w-full px-4 mb-3">
                    <label className="ml-4 " for="MoTaDV">
                      Mô tả đánh giá về dịch vụ tại quán:
                    </label>

                    <textarea
                      type="text"
                      name="MoTaDV"
                      id="MoTaDV"
                      rows="2"
                      cols="50"
                      value={rateDescription.MoTaDV}
                      onChange={(e) => {
                        setRateDescription({
                          ...rateDescription,
                          [e.target.name]: e.target.value,
                        });
                      }}
                      class="w-full h py-2 pl-8 pr-10 mt-2 bg-white rounded-2xl hover:ring-1 outline-blue-500"
                    />
                  </div>
                </div>
              </div>
              {rateError && (
                <p className="block text-sm text-red-900 text-center">
                  {rateError}
                </p>
              )}

              <div class="w-full px-8 mt-3 pb-2 flex items-center justify-center">
                <button
                  type="submit"
                  class=" py-2 bg-[#194284] w-1/2 rounded-2xl text-blue-50 text-[20px] font-semibold hover:opacity-75"
                >
                  Lưu
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {status === "Rate" && hasRate && (
        <div
          onClick={() => {
            handleModal();
          }}
          className="fixed top-0 right-0 left-0 bottom-0 bg-black/10 z-50 flex items-center justify-center"
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className=" w-[200px] h-[200px] bg-gray-300 relative"
          >
            <div
              onClick={() => {
                handleModal();
              }}
              className=" absolute top-0 right-0 font-bold text-xl w-[25px] h-[30px] bg-red-400 rounded-tr text-white text-center"
            >
              x
            </div>
            <div
              className=" mt-6 text-md font-semibold
             p-4"
            >
              Lịch cắt này bạn đã đánh giá rồi.
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BookingInforModal;
