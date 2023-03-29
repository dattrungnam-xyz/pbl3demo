import React, { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  BarberCard,
  UserNavbar,
  Hero,
  ServiceCard,
  HairGallery,
  Footer,
} from "../components";
// import { listBarber } from "../assets/BarberStaff";
import { getData } from "../utils/fetchApi";

const Home = () => {
  //  const user = useSelector((state)=> state.auth.login.currentUser)
  const [barber, setBarBer] = useState([]);
  const [service, setService] = useState([]);
  useEffect(() => {
    getData("http://localhost:8080/v1/staff/barber").then((res) => {
      setBarBer(res);
    });
    getData("http://localhost:8080/v1/service").then((res) => {
      setService(res);
    });
  }, []);
  return (
    <>
      <UserNavbar />

      <Hero />
      <section className="mt-8 px-4 flex items-center justify-center flex-col">
        <div className="w-full text-center text-gray-900 my-12  max-sm:text-2xl   sm:text-3xl capitalize tracking-widest lg:text-4xl">
          Barber tiêu biểu
        </div>
        <div className="grid  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 max-sm:grid-cols-1 grid-cols-4 gap-12 p-3 max-w-[1200px]">
          {barber?.map((item, index) => {
            if (index < 3) {
              return (
                <BarberCard key={index} image={item.Avatar} name={item.HoTen} />
              );
            } else return;
          })}
        </div>
      </section>
      <section className="mt-8 px-4 pb-24 bg-gradient-to-r from-[#010c2a] to-[#090708] ">
        <div className="w-full text-center text-white py-12  max-sm:text-2xl  sm:text-3xl capitalize tracking-widest lg:text-4xl">
          Dịch vụ
        </div>
        <div className=" grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-12 p-3  bg-transparent">
          {service?.filter((item)=>{
                return item.LoaiDichVu == 1
          })?.map((item, index) => {
            return (
              <ServiceCard
                key={index}
                name={item.TenDichVu}
                image={
                  item.Avatar
                  // "https://images.pexels.com/photos/3993132/pexels-photo-3993132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }
                description={item.Description}
              />
            );
          })}
          {/* <ServiceCard
            image={
              "https://i.pinimg.com/564x/b9/80/0b/b9800be5ddc78f6280406f2bc118f328.jpg"
            }
          />
          <ServiceCard
            image={
              "https://images.pexels.com/photos/4947279/pexels-photo-4947279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
          />
          <ServiceCard
            image={
              "https://images.pexels.com/photos/12304505/pexels-photo-12304505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
          /> */}
        </div>
        <div className=" mt-10 relative flex">
          <div className="z-20 flex-1">
            <img
              src="https://images.pexels.com/photos/3998417/pexels-photo-3998417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="w-full max-w-[80%] max-h-[700px]"
            />
          </div>
          <div className="absolute p-4 right-6 max-sm:right-12 bottom-0 translate-y-14 max-md:translate-x-6 z-30  xl:right-24 2xl:right-36">
            <img
              className="w-full 2xl:max-w-[300px] xl:max-w-[240px] max-lg:max-w-[180px] max-sm:max-w-[120px]"
              alt=""
              src="https://images.pexels.com/photos/3998413/pexels-photo-3998413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </div>
          <div className="absolute p-4 right-6 max-sm:right-12 bottom-0 translate-y-14 max-md:translate-x-6 border   xl:right-24 2xl:right-36">
            <img
              className="w-full 2xl:max-w-[300px] xl:max-w-[240px] max-lg:max-w-[180px] max-sm:max-w-[120px]"
              alt=""
              src="https://images.pexels.com/photos/3998413/pexels-photo-3998413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </div>
        </div>
      </section>
      <section className=" px-4 pb-8 mb-8">
        <div className="w-full text-center text-gray-900 my-12 max-sm:text-2xl  sm:text-3xl capitalize tracking-widest lg:text-4xl">
          Kiểu tóc thịnh hành
        </div>
        <HairGallery />
        {/* //  <Carousel /> */}
      </section>
      <Link to="/Admin" className="bg-red-700">
        abcd
      </Link>

      
      <Footer />
    </>
  );
};

export default Home;
