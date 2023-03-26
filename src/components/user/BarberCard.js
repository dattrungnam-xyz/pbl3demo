import React from "react";


const BarberCard = ({index,image,name}) => {
  return (
    <div key={index} class="w-[full] h-[full] bg-gray-200 ">
      <img className=" w-full max-h-[500px]" src={image} alt=""/>
      <div className="text-center">
        <p className="text-base py-4 font-medium cursor-default">
          BARBER
        </p>
        <p className="text-2xl capitalize font-semibold cursor-default">
        {name}
        </p>
       
        <p className=" my-4 underline cursor-pointer"> Xem chi tiết</p>
      </div>
    </div>
  );
};

export default BarberCard;
