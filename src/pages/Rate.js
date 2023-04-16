import React, { useState, useEffect } from "react";
import { UserNavbar } from "../components";
import { useSelector } from "react-redux";
import { getDataWithToken } from "../utils/fetchApi";

const Rate = () => {
  const user = useSelector((state) => state.auth.login.currentUser);
  const [rateData, setRateData] = useState([]);
  useEffect(() => {
    user.type === "staff" &&
      getDataWithToken(
        "http://localhost:8080/v1/booking/rating",
        user.token
      ).then((res) => {
        setRateData(res);
        console.log(res);
      });
  }, []);
  return (
    <>
      <UserNavbar />
      {user.type === "staff" && (
        <>
          <section className="pt-[62px] w-full  flex items-center justify-center min-h-screen">
            <div className="w-full max-w-[1200px] ">
              <div className="w-full grid grid-cols-3">
                <div className="bg-gray-300 text-gray-600 uppercase text-sm leading-normal text-center font-bold py-3 ">
                  STT
                </div>
                <div className="bg-gray-300 text-gray-600 uppercase text-sm leading-normal text-center font-bold py-3">
                  Số Sao
                </div>
                <div className="bg-gray-300 text-gray-600 uppercase text-sm leading-normal text-center font-bold py-3">
                  Mô Tả
                </div>
              </div>
              <div className="w-full max-h-[65vh] min-h-[60vh] overflow-y-auto">
                {rateData?.filter((item)=>{
                    return item.inforDetail[0].IdNhanVien ===  user.id

                })?.map((item, index) => {
                  return (
                    <div className="w-full grid grid-cols-3  border-b border-gray-200 hover:bg-gray-100">
                      <div className=" items-center py-3 px-2 text-center flex justify-center">
                        {index + 1}
                      </div>

                      <div className=" py-3 px-2 text-center flex items-center justify-center">
                        {item.SoSaoNV}
                      </div>
                      <div className=" py-3 px-2 text-center flex items-center justify-center">
                        {item.MoTaNV} 
                      </div>

                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Rate;
