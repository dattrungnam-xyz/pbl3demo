import React, { useState, useEffect } from "react";
import LineChart from "../LineChart";
import { UserData } from "../../assets/Data";
const AdminProfit = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Doanh Thu",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

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
          <LineChart chartData={userData} />
        </div>
      </div>
    </div>
  );
};

export default AdminProfit;
