import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { UserNavbar } from "../components";
import { getData } from "../utils/fetchApi";

const Booking = () => {
  const navigate = useNavigate();

  const user = useSelector((state) => state.auth.login.currentUser);
  const [hasBooking, setHasBooking] = useState(false);

  const [service, setService] = useState([]);
  const [booking, setBooking] = useState({});
  const [countServiceBooking, setCountServiceBooking] = useState(0);

  const [availableStaff, setAvailableStaff] = useState([]);

  const [timeDisplay, setTimeDisplay] = useState([]);

  const [ca, setCa] = useState("1");
  const [timeCutHair, setTimeCutHair] = useState("1");

  const [totalTimeCutHair, setTotalTimeCutHair] = useState(0);

  const [IdNhanVienSelected, setIdNhanVienSelected] = useState();

  const [date, setDate] = useState();
  const [thu, setThu] = useState();

  const [dateTimeError, setDateTimeError] = useState();
  const [serviceSelectedError, setServiceSelectedError] = useState();
  const [response, setResponse] = useState();

  const handleSubmit = async () => {

    

    const datebooking = new Date(date);

    const now = new Date();
    const month = now.getMonth() + 1;
    const monthtemp = month.toString().length == "1" ? "0" + month : month;

    const datetemp =
      now.getDate().toString().length == "1"
        ? "0" + now.getDate()
        : now.getDate();
    const today = new Date(`${now.getFullYear()}-${monthtemp}-${datetemp}`);

    const dayBooking = `${now.getFullYear()}-${monthtemp}-${datetemp}`;

    const hoursCutHair = timeDisplay.find((item) => {
      return item.IdGioCat === +timeCutHair;
    })?.GioCat;

    // submit logic

    countServiceBooking
      ? setServiceSelectedError("")
      : setServiceSelectedError("Vui lòng chọn dịch vụ");

    if (+today.getTime() > +datebooking.getTime()) {
      setDateTimeError("Vui lòng chọn lại ngày cắt tóc.");
    } else if (
      +today.getTime() === +datebooking.getTime() &&
      +hoursCutHair?.split(":")[0] < now.getHours() - 1
    ) {
      setDateTimeError("Vui lòng chọn lại giờ cắt tóc.");
    } else if (!IdNhanVienSelected) {
      setDateTimeError("Vui lòng chọn nhân viên cắt tóc.");
    }
    if (!dateTimeError && !serviceSelectedError && hasBooking === false) {
      const IdServiceBooking = [];
      for (const [key, value] of Object.entries(booking)) {
        value &&
          IdServiceBooking.push(
            service.find((item) => {
              return item.TenDichVu === key;
            }).IdDichVu
          );
      }
      const dataBooking = {
        IdDichVu: IdServiceBooking,
        NgayCat: date,
        NgayDat: dayBooking,
        IdGioCat: +timeCutHair,
        IdNhanVien: +IdNhanVienSelected,
        IdKhachHang: user.id,
        Ca: ca,
        ThuNgay: thu,
        TongThoiGianCat: totalTimeCutHair,
      };
   //   console.log(JSON.stringify(dataBooking));

    user &&  IdNhanVienSelected &&
        countServiceBooking &&
        !(
          +today.getTime() === +datebooking.getTime() &&
          +hoursCutHair?.split(":")[0] < now.getHours() - 1
        ) &&
        !(+today.getTime() > +datebooking.getTime()) &&
        (await fetch("http://localhost:8080/v1/booking", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            token: `${user.token}`,
          },
          body: JSON.stringify(dataBooking),
        })
          .then((res) => res.json())
          .then((res) => {
            setResponse(res);
            if (res.message) {
              setHasBooking(true);
            }
          }));
    }
  };

  const handleSetBooking = (e) => {
    setResponse("");
    setServiceSelectedError("");
    if (booking?.[e]) {
      setCountServiceBooking((pre) => pre - 1);
      setBooking({ ...booking, [e]: false });
      const time = service.find((item) => {
        return item.TenDichVu === e;
      }).ThoiGian;
      setTotalTimeCutHair((pre) => pre - time);
    } else {
      setCountServiceBooking((pre) => pre + 1);
      setBooking({ ...booking, [e]: true });
      const time = service.find((item) => {
        return item.TenDichVu === e;
      }).ThoiGian;

      setTotalTimeCutHair((pre) => pre + time);
    }
  };

  const handleChangeDay = (e) => {
    setResponse("");
    setDateTimeError("");
    setDate(e.target.value);
    const tempdate = new Date(e.target.value);
    setThu(tempdate.getDay());
  };

  useEffect(() => {
    const now = new Date();
    const month = now.getMonth() + 1;
    //month.toString().length
    const monthtemp = month.toString().length == "1" ? "0" + month : month;
    const datetemp =
      now.getDate().toString().length == "1"
        ? "0" + now.getDate()
        : now.getDate();

    setDate(`${now.getFullYear()}-${monthtemp}-${datetemp}`);
    setThu(now.getDay());
    //setDate(monthtemp)
  }, []);

  useEffect(() => {
    timeCutHair &&
      ca &&
      date &&
      getData(
        `http://localhost:8080/v1/staff/barbernotbusy/${timeCutHair}&${thu}&${ca}&${date}`
      ).then((res) => {
        console.log("---")
        console.log(res)
        console.log("---")

        setAvailableStaff(res.filter(item => item.An ===0));
      });
  }, [timeCutHair, ca, date, thu, IdNhanVienSelected]);

  useEffect(() => {
    getData("http://localhost:8080/v1/service").then((res) => {
      //console.log(res)
      
      setService(res.filter(item =>{ return item.An === 0}));
    });
  }, []);

  useEffect(() => {
    getData("http://localhost:8080/v1/booking/time").then((res) => {
      const data = res.filter((item) => {
        if (ca) {
          // eslint-disable-next-line eqeqeq
          return item.Ca == ca;
        } else {
          // eslint-disable-next-line eqeqeq
          return item.Ca == 1;
        }
      });
      setTimeDisplay(data);
    });
  }, [ca]);
  return (
    <>
      <UserNavbar />
      {user ? (
      <div className="bg-gray-10 mt-[62px] items-center justify-center  overflow-y-auto">
        <div className="w-full h-full max-sm:pt-4 pt-12 max-sm:pb-4 pb-8 md:px-10 px-4 flex flex-row max-sm:flex-col  ">
          <div className="w-1/2 max-sm:w-full">
            <div className="w-3/4 mb-4 ">
              <label className="ml-4 ">Chọn ngày cắt <span className="text-[red]">*</span></label>
              <div>
                <input
                  className="w-full py-3 mt-2 pl-7 pr-3 bg-slate-200  rounded-2xl hover:ring-1 outline-blue-500"
                  type="date"
                  onChange={(e) => {
                    handleChangeDay(e);
                  }}
                  value={date}
                />
              </div>
            </div>

            <div className="w-3/4 mb-4 relative">
              <label className="ml-4 ">Chọn buổi <span className="text-[red]">*</span></label>
              {/* <div className="absolute right-0 top-[50%] translate-y-1 -translate-x-[10px] ">
                <box-icon name="chevron-down"></box-icon>
              </div> */}

              <select
                className="w-full py-3 mt-2 pl-7 pr-3 bg-slate-200  rounded-2xl hover:ring-1 outline-blue-500"
                onChange={(e) => {
                  setCa(e.target.value);
                  e.target.value === "2" && setTimeCutHair(22);
                  e.target.value === "3" && setTimeCutHair(45);
                  setDateTimeError("")
                }}
              >
                <option selected value="1">
                  Sáng
                </option>
                <option value="2">Chiều</option>
                <option value="3">Tối</option>
              </select>
            </div>
            <div className="w-3/4 mb-4 relative">
              <label className="ml-4 ">Chọn giờ cắt <span className="text-[red]">*</span></label>
              {/* <div className="absolute right-0 top-[50%] translate-y-1 -translate-x-[10px] ">
                <box-icon name="chevron-down"></box-icon>
              </div> */}

              <select
                className="w-full  py-3 mt-2 pl-7 pr-3 bg-slate-200  rounded-2xl hover:ring-1 outline-blue-500"
                onChange={(e) => {
                  setTimeCutHair(e.target.value);
                  setDateTimeError("");
                }}
              >
                {timeDisplay.map((item, index) => {
                  return (
                    <option
                      selected={index == 0 ? true : false}
                      key={item.IdGioCat}
                      value={item.IdGioCat}
                    >
                      {item.GioCat}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="w-3/4 mb-4 relative">
              <label className="ml-4 ">Chọn thợ cắt tóc <span className="text-[red]">*</span></label>

              {/* <div className="absolute right-0 top-[50%] translate-y-1 -translate-x-[10px] ">
                <box-icon name="chevron-down"></box-icon>
              </div> */}
              <select
                className="w-full py-3 mt-2 pl-7 pr-3 bg-slate-200  rounded-2xl hover:ring-1 outline-blue-500"
                placeholder="Thợ cắt tóc"
                onChange={(e) => {
                  setIdNhanVienSelected(e.target.value);
                }}
              >
                <option value="" selected disabled hidden>
                  Chọn nhân viên
                </option>
                {availableStaff ? (
                  availableStaff.map((item, index) => {
                    return (
                      <option key={index} value={item.IdNhanVien}>
                        {item.HoTen}
                      </option>
                    );
                  })
                ) : (
                  <></>
                )}
              </select>
            </div>
            <div>
              <p className="pl-4 text-[red] text-sm">{dateTimeError}</p>
            </div>
          </div>
          <div className="w-1/2 max-sm:w-full ">
            <div className="w-full ">
              <label className="ml-4 ">Chọn dịch vụ <span className="text-[red]">*</span></label>
              <div className="grid grid-cols-2  gap-2 h-[160px] mt-2">
                {service &&
                  service
                    .filter((item) => {
                      return item.LoaiDichVu === 1;
                    })
                    .map((item) => {
                      return (
                        <>
                          {booking?.[item.TenDichVu] ? (
                            <>
                              <div
                                name={item.TenDichVu}
                                value={item.TenDichVu}
                                onClick={() => {
                                  handleSetBooking(item.TenDichVu);
                                }}
                                className=" bg-slate-200   border-[2px] border-blue-500 rounded  flex items-center justify-center cursor-pointer font-semibold text-md"
                              >
                                {item.TenDichVu}
                              </div>
                            </>
                          ) : (
                            <>
                              <div
                                name={item.TenDichVu}
                                value={item.TenDichVu}
                                onClick={() => {
                                  handleSetBooking(item.TenDichVu);
                                }}
                                className=" bg-slate-200 p-[2px]   border-blue-500 rounded  flex items-center justify-center cursor-pointer font-semibold text-md"
                              >
                                {item.TenDichVu}
                              </div>
                            </>
                          )}
                        </>
                      );
                    })}
              </div>
            </div>
            <div className="w-full mt-4 ">
              <label className="ml-4 ">Chọn dịch vụ phụ <span className="text-[red]">*</span></label>
              <div className="grid grid-cols-2 gap-2 h-[160px] mt-2">
                {service &&
                  service
                    .filter((item) => {
                      return item.LoaiDichVu === 2;
                    })
                    .map((item) => {
                      return (
                        <>
                          {booking?.[item.TenDichVu] ? (
                            <>
                              <div
                                name={item.TenDichVu}
                                value={item.TenDichVu}
                                onClick={() => {
                                  handleSetBooking(item.TenDichVu);
                                }}
                                className=" bg-slate-200   border-[2px] border-blue-500 rounded  flex items-center justify-center cursor-pointer font-semibold text-md"
                              >
                                {item.TenDichVu}
                              </div>
                            </>
                          ) : (
                            <>
                              <div
                                name={item.TenDichVu}
                                value={item.TenDichVu}
                                onClick={() => {
                                  handleSetBooking(item.TenDichVu);
                                }}
                                className=" bg-slate-200 p-[2px]  border-blue-500 rounded  flex items-center justify-center cursor-pointer font-semibold text-md"
                              >
                                {item.TenDichVu}
                              </div>
                            </>
                          )}
                        </>
                      );
                    })}
              </div>

              <div className="mt-1">
                Thời gian dự kiến: {totalTimeCutHair} phút
              </div>
            </div>

            <div>
              <p
                className={`mt-4 text-sm text-[red] ${
                  serviceSelectedError && "visible"
                }`}
              >
                {serviceSelectedError}
              </p>
            </div>
          </div>
        </div>
        {response && (
          <div
            className={`w-full text-center text-sm -translate-y-4 ${
              response.message ? "text-green-900" : "text-red-900"
            } `}
          >
            {response.message ? response.message : response.error}
          </div>
        )}
        <div className=" flex w-full mb-6 items-center justify-center">
          <button
            onClick={handleSubmit}
            type="button"
            className="max-sm:w-3/4 w-[280px] py-2 bg-[#194284]  rounded-2xl text-blue-50 text-[20px] font-semibold hover:opacity-75"
          >
            Đặt lịch
          </button>
        </div>
      </div>
       ) : (
         <>
           <div className="w-full h-screen pt-[60px] flex items-center justify-center">
             <p>Vui lòng <Link to={"/Login"} className="text-md font-semibold underline">Đăng nhập</Link> để thực hiện chức năng này</p>
           </div>
         </>
      )} 
    </>
  );
};

export default Booking;
