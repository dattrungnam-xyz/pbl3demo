import React from "react";

const BarberCard = () => {
  return (
    <div class="w-[full] h-[full] bg-red-200 ">
      <img className="bg-red-700" src="https://images.pexels.com/photos/7440142/pexels-photo-7440142.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
      <div>
        <p className="">
          BARBER
        </p>
        <p className="">
        Họ tên
        </p>
        <p className="">
          mô tả
        </p>
        <p className=""> đọc thêm</p>
      </div>
    </div>
  );
};

export default BarberCard;
