import React from "react";

const ServiceCard = ({image}) => {
  return (
    // <div className="bg-gray-900 min-w-[300px]">
    <div class=" bg-transparent flex flex-col justify-center items-center min-w-[300px] ">
      {/* <div class="w- p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all transform duration-500">
          <img
            class="w-64 object-cover rounded-t-md"
            src="https://i.pinimg.com/564x/b9/80/0b/b9800be5ddc78f6280406f2bc118f328.jpg"
            alt=""
          />
          
            <h1 class="w-full text-center text-2xl font-bold text-gray-700">Cắt tóc</h1>
            
        
            <div class="mt-4 mb-2 flex justify-center pl-4 pr-2">
              
              <button class="text-lg block font-semibold py-2 px-6 text-white hover:bg-gray-500 bg-neutral-800 rounded-lg shadow hover:shadow-md transition duration-300">
                Xem chi tiết
              </button>
            </div>
          </div>
       */}
      {image?<img
        class="block w-64 h-64 object-cover rounded-full border-sky-300 border-8 cursor-pointer hover:opacity-90"
        src={image}
        alt=""
        />: <img
        class="block w-64 h-64 object-cover rounded-full border-sky-300 border-8 cursor-pointer hover:opacity-90"
        src={'https://i.pinimg.com/564x/83/bc/8b/83bc8b88cf6bc4b4e04d153a418cde62.jpg'}
        alt=""
        />}
      <p className="mt-6 px-6 text-zinc-200 text-justify text-xl uppercase">
        Cắt tóc 
      </p>
      <p className="mt-4 px-6 text-zinc-200 text-justify">
        Trải nghiệm dịch vụ cắt tóc chuyên nghiệp chỉ với 120.000 VND.
      </p>

      <p className="mt-4 text-lg text-white underline cursor-pointer">
        Xem chi tiết.
      </p>
    </div>
    // </div>
  );
};

export default ServiceCard;
