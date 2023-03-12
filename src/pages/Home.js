import React, { useState } from "react";
import { BarberCard, UserNavbar, Hero, DvuCard, Carousel } from "../components";

const Home = () => {
  const [user, setUser] = useState(false);
  return (
    <>
      <UserNavbar user={user} setUser={setUser} />
      <Hero user={user} />
      <section class="mt-8 px-4">
        <div class="w-full text-center text-gray-900 my-12  max-sm:text-2xl   sm:text-3xl capitalize tracking-widest lg:text-4xl">
          Barber tiêu biểu
        </div>
        <div class="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 max-sm:grid-cols-1 gap-8">
          <BarberCard />
          <BarberCard />
          <BarberCard />
        </div>
      </section>
      <section class="mt-8 px-4 pb-24 bg-gradient-to-r from-[#010c2a] to-[#090708] ">
        <div class="w-full text-center text-white py-12  max-sm:text-2xl  sm:text-3xl capitalize tracking-widest lg:text-4xl">
          Dịch vụ
        </div>
        <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-12 p-3  bg-transparent">
          <DvuCard />
          <DvuCard />
          <DvuCard />
          <DvuCard />
        </div>
        <div className=" mt-10 relative flex">
          <div className="z-20 flex-1">
            <img
              src="https://images.pexels.com/photos/3998417/pexels-photo-3998417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="max-w-[80%] max-h-[700px]"
            />

          </div>
          <div className="absolute p-4 right-6 max-sm:right-12 bottom-0 translate-y-10 max-md:translate-x-6 z-30">
            <img className="max-w-[240px] max-lg:max-w-[180px] max-sm:max-w-[120px]" alt="" src="https://images.pexels.com/photos/3998413/pexels-photo-3998413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
          </div>
          <div className="absolute p-4 right-6 max-sm:right-12 bottom-0 translate-y-10 max-md:translate-x-6 border">
            <img className="max-w-[240px] max-lg:max-w-[180px] max-sm:max-w-[120px]" alt="" src="https://images.pexels.com/photos/3998413/pexels-photo-3998413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
          </div>
        </div>
      </section>
      <section className="pt-8 px-4 ">
        <div class="w-full text-center text-gray-900 my-12 max-sm:text-2xl  sm:text-3xl capitalize tracking-widest lg:text-4xl">
          Kiểu tóc thịnh hành
        </div>
        <Carousel />
      </section>
    </>
  );
};

export default Home;
