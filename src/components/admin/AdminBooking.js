import React from "react";

const AdminBooking = () => {
  return (
    // <div className="flex flex-col w-full max-w-[80vw]">
    //   <div className="w-full p-4 flex justify-between">
    //       <div></div>
    //       <div>
    //         <input type="text" placeholder="search...."className="h-full w-[250px] border-[2px] border-gray-200 rounded-xl outline-none p-2 "/>
    //       </div>
    //       <div>
    //         <button type="button" className="h-full py-2 px-6 bg-green-600 flex justify-center items-center text-white">
    //         <box-icon name='plus' color='#ffffff' ></box-icon>
    //           Add
    //         </button>
    //       </div>

    //     </div>
    // <div className="w-full min-h-[300px] p-4  font-sans overflow-hidden">
    //   <div className="w-full ">
    //     <div className="bg-white shadow-md rounded my-6">
    //       <table className="min-w-max w-full table-auto">
    //         <thead>
    //           <tr className="bg-gray-300 text-gray-600 uppercase text-sm leading-normal">
    //             <th className="py-3 px-6 text-left">ID</th>
    //             <th className="py-3 px-6 text-left">Người đặt</th>
    //             <th className="py-3 px-6 text-left">Thợ cắt</th>
    //             <th className="py-3 px-6 text-center">Ngày đặt</th>
    //             <th className="py-3 px-6 text-center">Ngày cắt</th>

    //             <th className="py-3 px-6 text-center">Giờ cắt</th>

    //             <th className="py-3 px-6 text-center"></th>
    //           </tr>
    //         </thead>
    //         <tbody className="text-gray-600 text-sm font-light">
    //           <tr className="border-b border-gray-200 hover:bg-gray-100">
    //             <td className="py-3 px-6 text-left">
    //               <div className="flex items-center ">abd</div>
    //             </td>
    //             <td className="py-3 px-6 text-left">
    //               <div className="flex items-center">
    //                 <div className="mr-2">
    //                   <img
    //                     alt=""
    //                     className="w-6 h-6 rounded-full"
    //                     src="https://randomuser.me/api/portraits/men/1.jpg"
    //                   />
    //                 </div>
    //                 <span>Trần A</span>
    //               </div>
    //             </td>
    //             <td className="py-3 px-6 text-left">
    //               <div className="flex items-center">
    //                 <div className="mr-2">
    //                   <img
    //                     alt=""
    //                     className="w-6 h-6 rounded-full"
    //                     src="https://randomuser.me/api/portraits/men/1.jpg"
    //                   />
    //                 </div>
    //                 <span>Trần A</span>
    //               </div>
    //             </td>
    //             <td className="py-3 px-6 text-center">
    //               <div className="flex items-center justify-center">20/06/2003</div>
    //             </td>
    //             <td className="py-3 px-6 text-center">
    //               <div className="flex items-center justify-center">20/06/2003</div>
    //             </td>

    //             <td className="py-3 px-6 text-center">
    //               <div className="flex items-center justify-center">15:00</div>
    //             </td>

    //             <td className="py-3 px-6 text-center">
    //               <div className="flex item-center justify-center">
    //                 <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
    //                   <svg
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     fill="none"
    //                     viewBox="0 0 24 24"
    //                     stroke="currentColor"
    //                   >
    //                     <path
    //                       stroke-linecap="round"
    //                       stroke-linejoin="round"
    //                       stroke-width="2"
    //                       d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    //                     />
    //                     <path
    //                       stroke-linecap="round"
    //                       stroke-linejoin="round"
    //                       stroke-width="2"
    //                       d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
    //                     />
    //                   </svg>
    //                 </div>
    //                 <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
    //                   <svg
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     fill="none"
    //                     viewBox="0 0 24 24"
    //                     stroke="currentColor"
    //                   >
    //                     <path
    //                       stroke-linecap="round"
    //                       stroke-linejoin="round"
    //                       stroke-width="2"
    //                       d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
    //                     />
    //                   </svg>
    //                 </div>
    //                 <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
    //                   <svg
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     fill="none"
    //                     viewBox="0 0 24 24"
    //                     stroke="currentColor"
    //                   >
    //                     <path
    //                       stroke-linecap="round"
    //                       stroke-linejoin="round"
    //                       stroke-width="2"
    //                       d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
    //                     />
    //                   </svg>
    //                 </div>
    //               </div>
    //             </td>
    //           </tr>
    //         </tbody>
    //       </table>
    //     </div>
    //   </div>
    // </div>
    // </div>
    <div className="w-[300px] h-[600px]  mt-[10px] ml-[60px] flex flex-col bg-gray-200 rounded relative">
      <div className=" absolute top-0 right-0 font-bold text-xl w-[25px] h-[30px] bg-red-400 rounded-tr text-white text-center">
        x
      </div>
      <div className="text-xl font-bold mt-5 text-center mb-5">
        Thêm Dịch Vụ
      </div>
      <div class="w-full px-4 mb-3">
        <label className="ml-4 " for="username">
          Tên Dịch Vụ
        </label>

        <input
          type="text"
          name="username"
          id="username"
          class="w-full py-3 pl-8 pr-10 mt-2 bg-white  rounded-2xl hover:ring-1 outline-blue-500"
        />
      </div>
      <div class="w-full px-4 mb-3">
        <label className="ml-4 " for="username">
          Thời gian
        </label>

        <input
          type="text"
          name="username"
          id="username"
          class="w-full py-3 pl-8 pr-10 mt-2 bg-white  rounded-2xl hover:ring-1 outline-blue-500"
        />
      </div>
      <div class="w-full px-4 mb-3">
        <label className="ml-4 " for="username">
          Giá Tiền
        </label>

        <input
          type="text"
          name="username"
          id="username"
          class="w-full py-3 pl-8 pr-10 mt-2 bg-white rounded-2xl hover:ring-1 outline-blue-500"
        />
      </div>
      <div class="w-full px-4 mb-3">
        <label className="ml-4 " for="username">
          Loại Dịch Vụ
        </label>

        <input
          type="text"
          name="username"
          id="username"
          class="w-full py-3 pl-8 pr-10 mt-2 bg-white rounded-2xl hover:ring-1 outline-blue-500"
        />
      </div>
      <div class="w-full px-4 mb-3">
        <label className="ml-4 " for="username">
          Tiền Công Cho Nhân Viên
        </label>

        <input
          type="text"
          name="username"
          id="username"
          class="w-full py-3 pl-8 pr-10 mt-2 bg-white rounded-2xl hover:ring-1 outline-blue-500"
        />
      </div>
      <div class="w-full px-8 mt-3  ">
        <button
          type="submit"
          class=" py-2 bg-[#194284] w-full rounded-2xl text-blue-50 text-[20px] font-semibold hover:opacity-75"
        >
          Lưu
        </button>
      </div>
    </div>
  );
};

export default AdminBooking;
