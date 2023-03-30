import React, { useState, useEffect } from "react";
import { getData } from "../../utils/fetchApi";

const ServiceModal = ({ id, handleModal }) => {
  const [serviceData, setServiceData] = useState([]);
  const [error,setError] = useState("");
  useEffect(() => {
    id &&
      getData(`http://localhost:8080/v1/service/${id}`).then((res) => {
        setServiceData(res[0]);
        console.log(res[0]);
      });
  }, []);

  const handleSubmit = async(e)=>{
    try {
      if(!serviceData.TenDichVu || !serviceData.ThoiGian || !serviceData.TienCongNhanVien)
      {
          setError("Không được để trống Tên dịch vụ, Thời gian hoàn thành, Tiền công trả cho nhân viên")
      }
      else{
          //add service hoặc update service
        // await fetch("http://localhost:8080/v1/auth/register", {
        //     method: "post",
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(serviceData),
        //   })
      }
    } catch (error) {
      
    }
  }
  return (
    <div
      onClick={() => {
        handleModal();
      }}
      className="fixed top-0 right-0 left-0 bottom-0 bg-black/10 z-50 flex items-center justify-center"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="w-[700px] flex flex-col bg-gray-200 rounded relative border border-black "
      >
        <div
          onClick={() => {
            handleModal();
          }}
          className=" absolute top-0 right-0 font-bold text-xl w-[25px] h-[30px] bg-red-400 rounded-tr text-white text-center"
        >
          x
        </div>
        <div className="text-xl font-bold mt-5 text-center mb-5">
          Thêm Nhân Viên
        </div>
        <div className="grid grid-cols-2">
          <div>
            <div class="w-full px-4 mb-3">
              <label className="ml-4 " for="TenDichVu">
                Tên Dịch Vụ
              </label>

              <input
                type="text"
                value={`${id ? serviceData.TenDichVu : ""}`}
                onChange={(e) => {
                  setServiceData({
                    ...serviceData,
                    [e.target.name]: e.target.value,
                  });
                }}
                name="TenDichVu"
                id="TenDichVu"
                class="w-full py-3 pl-8 pr-10 mt-2 bg-white  rounded-2xl hover:ring-1 outline-blue-500"
              />
            </div>
            <div class="w-full px-4 mb-3">
              <label className="ml-4 " for="LoaiDichVu">
                Loại dịch vụ
              </label>

              <select
                onChange={(e) => {
                  setServiceData({
                    ...serviceData,
                    [e.target.name]: e.target.value,
                  });
                }}
                name="LoaiDichVu"
                id="LoaiDichVu"
                className="w-full py-3 mt-2 pl-7 pr-3 bg-white  rounded-2xl hover:ring-1 outline-blue-500"
              >
                <option
                  selected={serviceData.LoaiDichVu === 1 ? true : false}
                  value="1"
                >
                  Dịch vụ chính
                </option>
                <option
                  selected={serviceData.LoaiDichVu === 2 ? true : false}
                  value="2"
                >
                  Dịch vụ phụ
                </option>
              </select>
            </div>
            <div class="w-full px-4 mb-3">
              <label className="ml-4 " for="GiaTien">
                Giá tiền
              </label>

              <input
                type="text"
                name="GiaTien"
                id="GiaTien"
                value={`${id ? serviceData.GiaTien : ""}`}
                onChange={(e) => {
                  setServiceData({
                    ...serviceData,
                    [e.target.name]: e.target.value,
                  });
                }}
                class="w-full py-3 pl-8 pr-10 mt-2 bg-white  rounded-2xl hover:ring-1 outline-blue-500"
              />
            </div>
            <div class="w-full px-4 mb-3">
              <label className="ml-4 " for="ThoiGian">
                Thời gian hoàn thành
              </label>

              <input
                type="text"
                name="ThoiGian"
                id="ThoiGian"
                value={`${id ? serviceData.ThoiGian : ""}`}
                onChange={(e) => {
                  setServiceData({
                    ...serviceData,
                    [e.target.name]: e.target.value,
                  });
                }}
                class="w-full py-3 pl-8 pr-10 mt-2 bg-white rounded-2xl hover:ring-1 outline-blue-500"
              />
            </div>
          </div>
          <div>
            <div class="w-full px-4 mb-3">
              <label className="ml-4 " for="TienCongNhanVien">
                Tiền công trả nhân viên
              </label>

              <input
                type="text"
                name="TienCongNhanVien"
                id="TienCongNhanVien"
                value={`${id ? serviceData.TienCongNhanVien : ""}`}
                onChange={(e) => {
                  setServiceData({
                    ...serviceData,
                    [e.target.name]: e.target.value,
                  });
                }}
                class="w-full py-3 pl-8 pr-10 mt-2 bg-white rounded-2xl hover:ring-1 outline-blue-500"
              />
            </div>
            <div class="w-full px-4 mb-3">
              <label className="ml-4 " for="Avatar">
                Avatar{" "}
                <span className="text-sm">(Chỉ dành cho dịch vụ chính)</span>
              </label>

              <input
                type="text"
                name="Avatar"
                id="Avatar"
                value={`${id ? serviceData?.Avatar : ""}`}
                onChange={(e) => {
                  setServiceData({
                    ...serviceData,
                    [e.target.name]: e.target.value,
                  });
                }}
                class="w-full py-3 pl-8 pr-10 mt-2 bg-white rounded-2xl hover:ring-1 outline-blue-500"
              />
            </div>

            <div class="w-full px-4 mb-3">
              <label className="ml-4 " for="Description">
                Mô tả{" "}
                <span className="text-sm">(Chỉ dành cho dịch vụ chính)</span>
              </label>

              <textarea
                type="text"
                name="Description"
                id="Description"
                rows="4"
                cols="50"
                value={`${id ? serviceData?.Description : ""}`}
                onChange={(e) => {
                  setServiceData({
                    ...serviceData,
                    [e.target.name]: e.target.value,
                  });
                }}
                class="w-full h py-6 pl-8 pr-10 mt-2 bg-white rounded-2xl hover:ring-1 outline-blue-500"
              />
            </div>
          </div>
        </div>

        <div class="w-full px-8 mt-3 pb-2 flex items-center justify-center">
          <button
            onClick={handleSubmit}
            type="submit"
            class=" py-2 bg-[#194284] w-1/2 rounded-2xl text-blue-50 text-[20px] font-semibold hover:opacity-75"
          >
            Lưu
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;
