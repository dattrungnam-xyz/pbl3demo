import React from "react";

const BarberCard = () => {
  return (
    <div class="border relative max-w-md mx-auto md:max-w-2xl min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16">
      <div class="px-6">
        <div class="flex flex-wrap justify-center">
          <div class="w-full flex justify-center">
            <div class="relative">
              <img
                src="https://i.pinimg.com/564x/33/e2/ee/33e2ee3211bfe65ff5815391772c9f47.jpg"
                class="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
                alt="avatar"
              />
            </div>
          </div>
          <div class="w-full text-center mt-20">
            <div class="flex justify-center lg:pt-4 pt-8 pb-0">
              <div class="p-3 text-center w-[50%]">
                <span class="text-xl font-bold block uppercase tracking-wide text-slate-700">
                  2 năm
                </span>
                <span class="text-sm text-slate-400">Kinh nghiệm</span>
              </div>
              <div class="p-3 text-center w-[50%]">
                <span class="text-xl font-bold block uppercase tracking-wide text-slate-700">
                  4.7
                </span>
                <span class="text-sm text-slate-400">Số sao trung bình</span>
              </div>

              
            </div>
          </div>
        </div>
        <div class="text-center mt-2">
          <h3 class="text-2xl text-slate-700 font-bold leading-normal mb-1 mt-4">
            Trần Văn A
          </h3>
          <div class="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase py-4">
            <i class="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarberCard;
