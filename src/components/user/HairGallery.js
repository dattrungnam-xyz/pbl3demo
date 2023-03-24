import React from "react";
import data from "../../assets/Hair";

const HairGallery = () => {
  return (
    <div className="flex items-center justify-center">
      <div className=" w-full max-w-[1200px] lg:px-18 md:px-8 sm:px-4  grid grid-cols-4 gap-4 grid-rows-10">
        <div className="row-start-1 row-end-3 max-h-[290px] col-start-1 col-end-2">
          <img
            className="w-full h-full object-cover"
            src={data[0].image}
            alt=""
          />
        </div>
        <div className="row-start-1  row-end-6 col-start-2 col-end-3">
          <img
            className="w-full h-full object-cover"
            src={data[1].image}
            alt=""
          />
        </div>
        <div className="max-h-[280px] row-start-1  row-end-2 col-start-3 col-end-4">
          <img
            className="w-full h-full object-cover"
            src={data[2].image}
            alt=""
          />
        </div>
        <div className="row-start-1  row-end-8 col-start-4 col-end-5">
          <img
            className="w-full h-full object-cover"
            src={data[3].image}
            alt=""
          />
        </div>

        <div className="row-start-3 row-end-11 col-start-1 col-end-2">
          <img
            className="w-full h-full object-cover"
            src={data[4].image}
            alt=""
          />
        </div>
        <div className="row-start-6  row-end-11 col-start-2 col-end-3">
          <img
            className="w-full h-full object-cover"
            src={data[5].image}
            alt=""
          />
        </div>
        <div className="row-start-2  row-end-11  col-start-3 col-end-4">
          <img
            className="w-full h-full object-cover"
            src={data[6].image}
            alt=""
          />
        </div>
        <div className="row-start-8  row-end-11 max-h-[300px] col-start-4 col-end-5">
          <img
            className="w-full h-full object-cover"
            src={data[7].image}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HairGallery;
