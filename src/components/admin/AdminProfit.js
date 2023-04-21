import React, { useState, useEffect } from "react";
import LineChart from "../LineChart";
import { getDataOnlyAdmin } from "../../utils/fetchApi";
import { useSelector } from "react-redux";

const AdminProfit = () => {
  const user = useSelector((state) => state.auth.login.currentUser);
  const [billData,setBillData] = useState()

  const [importData,setImportData] = useState()

  const [chartData, setChartData] = useState();
  useEffect(() => {
    user.type === "admin" &&
      getDataOnlyAdmin("http://localhost:8080/v1/bill/profit", user.token).then(
        (res) => {
          console.log(res);
          setBillData(res)
          setChartData({
            labels: res.map((data) => data.NgayTaoHoaDon.slice(0,10)),
            datasets: [
              {
                label: "Thu Vào",
                data: res.map((data) => data.DoanhThu),
                backgroundColor: ["#2a71d0"],
                borderColor: "gray",
                borderWidth: 2,
              },
    
            ],
          })
        }
      );
      user.type === "admin" &&
      getDataOnlyAdmin("http://localhost:8080/v1/bill/profit", user.token).then(
        (res) => {
          console.log(res);
          setBillData(res)
          // setChartData({
          //   labels: res.map((data) => data.NgayTaoHoaDon.slice(0,10)),
          //   datasets: [
          //     {
          //       label: "Thu Vào",
          //       data: res.map((data) => data.DoanhThu),
          //       backgroundColor: ["#2a71d0"],
          //       borderColor: "gray",
          //       borderWidth: 2,
          //     },
    
          //   ],
          // })
        }
      );
        
  }, []);
  return (
    <div className="flex flex-col w-full max-w-[80vw] p-4">
      {/* <div className="w-full py-4 grid grid-cols-3">
        <div className="flex gap-4">
          <button
            type="button"
            className="h-full py-2 px-6 bg-gray-400 flex justify-center items-center text-white"
          >
            <box-icon name="user" color="#ffffff"></box-icon>
            Thợ Cắt Tóc
          </button>
          <button
            type="button"
            className="h-full py-2 px-6 bg-gray-400 flex justify-center items-center text-white"
          >
            <box-icon name="user" color="#ffffff"></box-icon>
            Kế Toán
          </button>
        </div>
        <div className="flex items-center justify-center">
          <input
            type="text"
            placeholder="search...."
            className="h-full w-[250px] border-[2px] border-gray-200 rounded-xl outline-none p-2 "
          />
        </div>
        <div className="flex items-center justify-end">
          <button
            type="button"
            className="h-full py-2 px-6 bg-green-600 flex justify-center items-center text-white"
            onClick={() => {
        
            }}
          >
            <box-icon name="plus" color="#ffffff"></box-icon>
            Add
          </button>
        </div>
      </div> */}

      <div className="w-full flex items-center justify-center font-sans overflow-hidden">
        <div className="w-[90%] ">
          {chartData && <LineChart chartData={chartData} />}
        </div>
      </div>
    </div>
  );
};

export default AdminProfit;
