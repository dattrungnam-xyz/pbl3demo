import React from "react";

const DvuCard = () => {
  return (
    // <div className="bg-gray-900 min-w-[300px]">
      <div class=" bg-transparent flex justify-center items-center min-w-[300px]">
        <div class="w- p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all transform duration-500">
          <img
            class="w-64 object-cover rounded-t-md"
            src="https://i.pinimg.com/564x/b9/80/0b/b9800be5ddc78f6280406f2bc118f328.jpg"
            alt=""
          />
          <div class="mt-4">
            <h1 class="w-full text-center text-2xl font-bold text-gray-700">Cắt tóc</h1>
            
        
            <div class="mt-4 mb-2 flex justify-center pl-4 pr-2">
              
              <button class="text-lg block font-semibold py-2 px-6 text-white hover:bg-gray-500 bg-neutral-800 rounded-lg shadow hover:shadow-md transition duration-300">
                Xem chi tiết
              </button>
            </div>
          </div>
        </div>
      </div>
    // </div>
  );
};

export default DvuCard;
