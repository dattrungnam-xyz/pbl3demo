import React from "react";
import data from "../../assets/Hair";
const RenderCarousel = ({ image, name }) => {
  return (
    <div className="flex flex-col lg:min-w-[calc((100%-24px)/4)] md:min-w-[calc((100%-16px)/3)] sm:min-w-[calc((100%-8px)/2)] max-sm:min-w-[calc((100%-8px)/2)] rounded overflow-hidden px-2 snap-start cursor-pointer hover:opacity-90 max-h-[400px] group">
      <img className="border border-gray-300 flex-1 h-[80%]" src={image} alt="" />
      <div>
        <p className="text-center text-bold text-2xl text-gray-900">
          {name}
        </p>
      </div>
    </div>
  );
};
const Carousel = () => {

  return (
    <div className="flex overflow-hidden ">
      <div className=" flex flex-nowrap gap-2 overflow-auto scroll-smooth  hide-scrollbar snap-x">
        {data?.map((item,index) => {
          return <RenderCarousel image={item.image} name={item.name} />;
        })}
      </div>
    </div>
  );
};

export default Carousel;
