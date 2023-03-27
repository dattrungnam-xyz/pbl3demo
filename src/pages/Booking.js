import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { UserNavbar } from "../components";
import { getData } from "../utils/fetchApi";

const Booking = () => {
  const user = useSelector((state) => state.auth.login.currentUser);

  const [service, setService] = useState([]);
  const [booking, setBooking] = useState({});

  const [availableStaff, setAvailableStaff] = useState([]);

  const [timeDisplay, setTimeDisplay] = useState([]);

  const [ca, setCa] = useState();
  const [timeCutHair, setTimeCutHair] = useState("1");

  const [date, setDate] = useState();

  const [dateTimeError, setDateTimeError] = useState();

  const handleSubmit = () => {
    // console.log(timeDisplay);
    // console.log(date)
    // const datebooking = new Date(date);
    // if (!datebooking.getTime()) {
    //   setDateTimeError("Vui lòng chọn ngày cắt tóc");
    // }
    // const now = new Date();
    // const example = "15:00";
    // const hours = example.split(":");
    // console.log(hours[0])
    // console.log(hours[1])
    // console.log(datebooking.getTime())
    //  console.log(now.getTime())
    //  console.log(now.getHours())
    //  console.log(now.getMinutes())

    // console.log(ca)
    console.log(timeCutHair);
  };
  const handleSetBooking = (e) => {
    if (booking?.[e]) {
      setBooking({ ...booking, [e]: false });
    } else {
      setBooking({ ...booking, [e]: true });
    }
  };

  

  useEffect(() => {
    getData(`http://localhost:8080/v1/staff/barbernotbusy/${timeCutHair}`).then((res) => {
      setAvailableStaff(res);
    });
  }, [timeCutHair]);

  useEffect(() => {
    getData("http://localhost:8080/v1/service").then((res) => {
      setService(res);
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
      {/* {user ? ( */}
      <div className="bg-gray-10 mt-[62px] items-center justify-center  overflow-y-auto">
        <div className="w-full h-full max-sm:pt-4 pt-12 max-sm:pb-4 pb-8 md:px-10 px-4 flex flex-row max-sm:flex-col  ">
          <div className="w-1/2 max-sm:w-full">
            <div className="w-3/4 mb-4 ">
              <label className="ml-4 ">Chọn ngày cắt</label>
              <div>
                <input
                  className="w-full py-3 mt-2 pl-7 pr-3 bg-slate-200  rounded-2xl hover:ring-1 outline-blue-500"
                  type="date"
                  onChange={(e) => {
                    setDate(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="w-3/4 mb-4 relative">
              <label className="ml-4 ">Chọn buổi</label>
              {/* <div className="absolute right-0 top-[50%] translate-y-1 -translate-x-[10px] ">
                <box-icon name="chevron-down"></box-icon>
              </div> */}

              <select
                className="w-full py-3 mt-2 pl-7 pr-3 bg-slate-200  rounded-2xl hover:ring-1 outline-blue-500"
                id="cars"
                placeholder="Chọn thợ cắt tóc"
                onChange={(e) => {
                  setCa(e.target.value);
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
              <label className="ml-4 ">Chọn giờ cắt</label>
              {/* <div className="absolute right-0 top-[50%] translate-y-1 -translate-x-[10px] ">
                <box-icon name="chevron-down"></box-icon>
              </div> */}

              <select
                className="w-full  py-3 mt-2 pl-7 pr-3 bg-slate-200  rounded-2xl hover:ring-1 outline-blue-500"
                id="cars"
                placeholder="Chọn thợ cắt tóc"
                onChange={(e) => {
                  setTimeCutHair(e.target.value);
                }}
              >
                {timeDisplay.map((item, index) => {
                  return (
                    <option
                      selected={index == 1 ? true : false}
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
              <label className="ml-4 ">Chọn thợ cắt tóc</label>

              {/* <div className="absolute right-0 top-[50%] translate-y-1 -translate-x-[10px] ">
                <box-icon name="chevron-down"></box-icon>
              </div> */}
              <select
                className="w-full py-3 mt-2 pl-7 pr-3 bg-slate-200  rounded-2xl hover:ring-1 outline-blue-500"
                placeholder="Thợ cắt tóc"
              >
                {availableStaff?.map((item, index) => {
                  return (
                    <option
                      select={index == 1 ? true : false}
                      key={index}
                      value={item.IdNhanVien}
                    >
                      {item.HoTen}
                    </option>
                  );
                })}
                {/* <option value="Nguyễn Văn A">Nguyễn Văn A</option>
                  <option value="Nguyễn Văn B">Nguyễn Văn B</option>
                  <option value="Nguyễn Văn C">Nguyễn Văn C</option>
                  <option value="Nguyễn Văn D">Nguyễn Văn D</option> */}
              </select>
            </div>
            <div>
              <p className="pl-4 text-[red] text-sm">{dateTimeError}</p>
            </div>
          </div>
          <div className="w-1/2 max-sm:w-full">
            <div className="w-full ">
              <label className="ml-4 ">Chọn dịch vụ</label>
              <div className="grid grid-cols-2 grid-rows-2 gap-2 h-[160px] mt-2">
                {/* <div className="col-start-1 col-end-2 row-start-1 row-end-2 bg-slate-200  border-[2px] border-blue-500 rounded  flex items-center justify-center cursor-pointer font-semibold text-md">
                  Cắt Tóc
                </div>
                <div className="col-start-2 col-end-3 row-start-1 row-end-2 bg-slate-200 border rounded  flex items-center justify-center cursor-pointer font-semibold text-md">
                  Uốn Tóc
                </div>
                <div className="col-start-1 col-end-2 row-start-2 row-end-3 bg-slate-200 border-[2px] border-blue-500 rounded flex items-center justify-center cursor-pointer font-semibold text-md">
                  Nhuộm Tóc
                </div>
                <div className="col-start-2 col-end-3 row-start-2  row-end-3 bg-slate-200 border-[2px] border-blue-500 rounded flex items-center justify-center cursor-pointer font-semibold text-md">
                  Tatoo Hair
                </div> */}
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
                                onClick={() => handleSetBooking(item.TenDichVu)}
                                className=" bg-slate-200  border-[2px] border-blue-500 rounded  flex items-center justify-center cursor-pointer font-semibold text-md"
                              >
                                {item.TenDichVu}
                              </div>
                            </>
                          ) : (
                            <>
                              <div
                                name={item.TenDichVu}
                                onClick={() => handleSetBooking(item.TenDichVu)}
                                className=" bg-slate-200   border-blue-500 rounded  flex items-center justify-center cursor-pointer font-semibold text-md"
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
            <div className="w-full mt-4">
              <label className="ml-4 ">Chọn dịch vụ phụ</label>
              <div className="grid grid-cols-2 grid-rows-2 gap-2 h-[160px] mt-2">
                {/* <div className="col-start-1 col-end-2 row-start-1 row-end-2 bg-slate-200  border-[2px] border-blue-500 rounded  flex items-center justify-center cursor-pointer font-semibold text-md">
                  Cạo râu
                </div>
                <div className="col-start-2 col-end-3 row-start-1 row-end-2 bg-slate-200 border-[2px] border-blue-500 rounded  flex items-center justify-center cursor-pointer font-semibold text-md">
                  Gội đầu
                </div>
                <div className="col-start-1 col-end-2 row-start-2 row-end-3 bg-slate-200 border-[2px] border-blue-500 rounded flex items-center justify-center cursor-pointer font-semibold text-md">
                  Lấy ráy tai
                </div>
                <div className="col-start-2 col-end-3 row-start-2  row-end-3 bg-slate-200 border-[2px] border-blue-500 rounded flex items-center justify-center cursor-pointer font-semibold text-md">
                  Đắp mặt nạ
                </div> */}
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
                                onClick={() => handleSetBooking(item.TenDichVu)}
                                className=" bg-slate-200  border-[2px] border-blue-500 rounded  flex items-center justify-center cursor-pointer font-semibold text-md"
                              >
                                {item.TenDichVu}
                              </div>
                            </>
                          ) : (
                            <>
                              <div
                                name={item.TenDichVu}
                                onClick={() => handleSetBooking(item.TenDichVu)}
                                className=" bg-slate-200   border-blue-500 rounded  flex items-center justify-center cursor-pointer font-semibold text-md"
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
          </div>
        </div>

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
      {/* ) : (
         <>
           <div className="w-full h-screen pt-[60px] flex items-center justify-center">
             <p>Vui lòng <Link to={"/Login"} className="text-md font-semibold underline">Đăng nhập</Link> để thực hiện chức năng này</p>
           </div>
         </>
      )} */}
    </>
  );
};

export default Booking;
