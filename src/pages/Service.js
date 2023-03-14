import React from "react";

import { UserNavbar } from "../components";


const RenderService = ({ title, description, left,image }) => {
  return (
    <section  class="w-full">
      <div class="flex mx-auto  w-full min-h-[400px]">
        {left ? (
          <>
            <div class="basis-1/2 overflow-hidden  relative">
              <img
                alt=""
                src={image}
                class="w-full h-full float-right align-middle absolute bottom-0 "
              />
            </div>
            <div class="basis-1/2 justify-center my-auto px-10">
              <p class="text-3xl mb-6 text-center">CẮT, SẤY, TẠO KIỂU</p>
              <p class="text-[#828791] text-base mb-6 text-center">
                Cắt tóc chuyên nghiệp với giá 80.000 VND Tại Liem Barber Shop,
                các bạn sẽ được tư vấn tạo kiểu tóc phù hợp với khuôn mặt bởi
                các barber giàu kinh nghiệm và thân thiện, mang đến trải nghiệm
                dịch vụ chuyên nghiệp mà vẫn ấm cúng.
              </p>
            </div>
          </>
        ) : (
          <>
            
            <div class="basis-1/2 justify-center my-auto px-10">
              <p class="text-3xl mb-6 text-center">CẮT, SẤY, TẠO KIỂU</p>
              <p class="text-[#828791] text-base mb-6 text-center">
                Cắt tóc chuyên nghiệp với giá 80.000 VND Tại Liem Barber Shop,
                các bạn sẽ được tư vấn tạo kiểu tóc phù hợp với khuôn mặt bởi
                các barber giàu kinh nghiệm và thân thiện, mang đến trải nghiệm
                dịch vụ chuyên nghiệp mà vẫn ấm cúng.
              </p>
            </div>
            <div class="basis-1/2 overflow-hidden relative">
              <img
                alt=""
                src={image}
                class="w-full h-full float-right align-middle absolute bottom-0 "
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
        <RenderService image="https://images.pexels.com/photos/897262/pexels-photo-897262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <RenderService image="https://images.pexels.com/photos/2035308/pexels-photo-2035308.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" left />
        <RenderService  image="https://images.pexels.com/photos/668196/pexels-photo-668196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        <RenderService  image="https://images.pexels.com/photos/897265/pexels-photo-897265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" left />
        <RenderService image="https://images.pexels.com/photos/897253/pexels-photo-897253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      </div>
      
    </>
  );
};

export default Service;
