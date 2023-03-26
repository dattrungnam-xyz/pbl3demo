import React from "react";

import { UserNavbar } from "../components";
import { service } from "../assets/service";

const RenderService = ({ index,title, description, left,image }) => {
  return (
    <section key={index} className="w-full">
      <div className="flex mx-auto  w-full min-h-[400px]">
        {left ? (
          <>
            <div className="basis-1/2 overflow-hidden  relative">
              <img
                alt=""
                src={image}
                className="w-full h-full float-right align-middle absolute bottom-0 "
              />
            </div>
            <div className="basis-1/2 justify-center my-auto px-10">
              <p className="text-3xl mb-6 text-center">{title}</p>
              <p className="text-[#828791] text-base mb-6 text-center">
                {description}
              </p>
            </div>
          </>
        ) : (
          <>
            
            <div className="basis-1/2 justify-center my-auto px-10">
              <p className="text-3xl mb-6 text-center">{title}</p>
              <p className="text-[#828791] text-base mb-6 text-center">
                {description}
              </p>
            </div>
            <div className="basis-1/2 overflow-hidden relative">
              <img
                alt=""
                src={image}
                className="w-full h-full float-right align-middle absolute bottom-0 "
              />
            </div>
          </>
        )}
      </div>
    </section>
  );
};

const Service = () => {
  return (
    <>
      <UserNavbar />
      <div className="w-full mt-[60px]">
        {
          service.map((item,index)=>{
         return <RenderService key={index} image={item.image} description = {item.description} title={item.title} left = {item.left} />
          })
        }
        {/* <RenderService image="https://images.pexels.com/photos/897262/pexels-photo-897262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <RenderService image="https://images.pexels.com/photos/2035308/pexels-photo-2035308.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" left />
        <RenderService  image="https://images.pexels.com/photos/668196/pexels-photo-668196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        <RenderService  image="https://images.pexels.com/photos/897265/pexels-photo-897265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" left />
        <RenderService image="https://images.pexels.com/photos/897253/pexels-photo-897253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" /> */}
      </div>
      
    </>
  );
};

export default Service;
