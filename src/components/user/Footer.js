import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-booking w-full min-h-[200px]">
      <section className="hidden md:block h-[360px] object-cover">
        <div className="w-full h-full flex items-center justify-center bg-neutral-900/80">
          <div className="grid max-sm:px-6 max-md:px-12 px-16 py-6 grid-cols-3 max-sm:gap-4 max-md:gap-6 gap-8 w-full min-h-[120px] bg-neutral-900">
            <div className=" flex items-center justify-center max-sm:hidden">
              <p className=" text-3xl font-semibold text-white ">BARBERSHOP</p>
            </div>
            <div className=" flex items-center justify-center">
              <p className="text-justify text-lg pl-8 pr-4 text-white border-l-[2px]">
                Barbershop cung cấp những dịch vụ cắt tóc theo xu hướng phù hợp
                với mọi lứa tuổi. Đặt lịch để trải nghiệm, thay đổi diện mạo
                cùng Barbershop.
              </p>
            </div>
            <div className=" flex items-center pl-8">
              <Link
                to={"/Booking"}
                className="border-none outline-none bg-[#d6a354] px-10 py-4  text-lg hover:opacity-90"
              >
                Đặt Lịch
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-neutral-900/80 flex items-center justify-center py-12" >
        <div className=" px-4 max-w-[1024px] w-full grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-[84px]  text-white">
          <div className="mb-8 md:mb-0">
            <p className="block w-full text-2xl uppercase text-center">
              Địa Chỉ
            </p>
            <div className="mt-4 flex  gap-2 w-full justify-center md:justify-start">
              <box-icon
                name="location-plus"
                type="solid"
                color="#ffffff"
              ></box-icon>
              <p>Nguyễn Lương Bằng,Liên Chiểu, Đà Nẵng</p>
            </div>
          </div>
          <div className="mb-8 md:mb-0">
            <div className="w-full text-2xl uppercase text-center">Liên Hệ</div>
            <div className="mt-4 flex  gap-2 w-full justify-center md:justify-start">
              <box-icon type="solid" name="phone" color="#ffffff"></box-icon>
              <p>Số Điện Thoại:</p>
              <p>0369394747</p>
            </div>
            <div className="mt-2 flex  gap-2 w-full justify-center md:justify-start">
              <box-icon name="envelope" type="solid" color="#ffffff"></box-icon>
              <p>Gmail</p>
              <p>abcd@gmail.com</p>
            </div>
          </div>
          <div className="mb-8 md:mb-0">
            <div className="w-full text-2xl uppercase text-center">
              Giờ làm việc{" "}
            </div>
            <div className="mt-4 flex  gap-2 w-full justify-center md:justify-start">
              <box-icon type="solid" name="time" color="#ffffff"></box-icon>
              <p>T2-CN: 7AM - 10:30PM</p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
