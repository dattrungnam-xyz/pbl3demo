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
      <section class="mt-8 px-4 pb-12 bg-gradient-to-r from-[#010c2a] to-[#090708] ">
        <div class="w-full text-center text-white py-12  max-sm:text-2xl  sm:text-3xl capitalize tracking-widest lg:text-4xl">
          Dịch vụ
        </div>
        <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-8 p-3  bg-transparent">
          <DvuCard />
          <DvuCard />
          <DvuCard />
          <DvuCard />
          <DvuCard />
        </div>
      </section>
      <section className="pt-8 px-4 ">
        <div class="w-full text-center text-gray-900 my-12 max-sm:text-2xl  sm:text-3xl capitalize tracking-widest lg:text-4xl">
          Kiểu tóc thịnh hành
        </div>
        <Carousel/>
      </section>
    </>
  );
};

export default Home;
