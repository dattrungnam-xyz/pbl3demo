import React, { useState, useEffect } from "react";
import { getData } from "../../utils/fetchApi";
import { useSelector } from "react-redux";
const ServiceModal = ({ status, id, handleModal }) => {

  const user = useSelector(state => state.auth.login.currentUser)
  const [serviceData, setServiceData] = useState({
    Avatar: "",
    Description: "",
    GiaTien: "",
    IdDichVu: "",
    LoaiDichVu: 1,
    TenDichVu: "",
    ThoiGian: "",
    TienCongNhanVien: "",
  });
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    id &&
      getData(`http://localhost:8080/v1/service/${id}`).then((res) => {
        setServiceData(res[0]);
        console.log(res[0]);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(serviceData)
    try {
      if (
        !serviceData.TenDichVu ||
        !serviceData.ThoiGian ||
        !serviceData.TienCongNhanVien
      ) {
        setError(
          "Không được để trống Tên dịch vụ, Thời gian hoàn thành, Tiền công trả cho nhân viên"
        );
      } else {
        
        status === "Add" &&
          (await fetch("http://localhost:8080/v1/service/", {
            method: "post",
            headers: {
              "Content-Type": "application/json",
              "token": `${user.token}`
            },
            body: JSON.stringify(serviceData),
          })
            .then((res) => res.json())
            .then((res) => {
              setMessage(res.message);
              setError(res.error);
            }));

        status === "Edit" &&
          (await fetch(`http://localhost:8080/v1/service/${id}`, {
            method: "post",
            headers: {
              "Content-Type": "application/json",
              "token": `${user.token}`
            },
            body: JSON.stringify(serviceData),
          })
            .then((res) => res.json())
            .then((res) => {
              setMessage(res.message);
              setError(res.error);
            }));
          handleModal()
      }
    } catch (error) {}
  };
  return (
    <div
      onClick={() => {
        handleModal();
      }}
      className="fixed top-0 right-0 left-0 bottom-0 bg-black/10 z-50 flex items-center justify-center"
    >
      <form
        onClick={(e) => {
          e.stopPropagation();
        }}
        onSubmit={handleSubmit}
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
          Thêm Dịch Vụ
        </div>
        <div className="grid grid-cols-2">
          <div>
            <div class="w-full px-4 mb-3">
              <label className="ml-4 " for="TenDichVu">
                Tên Dịch Vụ
              </label>

              <input
                type="text"
                value={`${serviceData.TenDichVu}`}
                onChange={(e) => {
                  setServiceData({
                    ...serviceData,
                    [e.target.name]: e.target.value,
                  });
                }}
                name="TenDichVu"
                id="TenDichVu"
                class="w-full py-3 pl-8 pr-10 mt-2 bg-white  rounded-2xl hover:ring-1 outline-blue-500"
                readOnly={status === "View" ? true : false}
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
                  hidden={serviceData.LoaiDichVu !== 1 && status === "View"}
                  disabled={serviceData.LoaiDichVu === 1 && status === "View"}
                  value="1"
                  name="LoaiDichVu"
                  onClick={(e) => {
                    setServiceData({
                      ...serviceData,
                      [e.target.name]: 1,
                    });
                  }}
                >
                  Dịch vụ chính
                </option>
                <option
                  selected={serviceData.LoaiDichVu === 2 ? true : false}
                  hidden={serviceData.LoaiDichVu !== 2 && status === "View"}
                  disabled={serviceData.LoaiDichVu === 2 && status === "View"}
                  value="2"
                  name="LoaiDichVu"
                  onClick={(e) => {
                    setServiceData({
                      ...serviceData,
                      [e.target.name]: 2,
                    });
                  }}
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
                type="number"
                name="GiaTien"
                id="GiaTien"
                value={`${serviceData.GiaTien}`}
                onChange={(e) => {
                  setServiceData({
                    ...serviceData,
                    [e.target.name]: e.target.value,
                  });
                }}
                readOnly={status === "View" ? true : false}
                class="w-full py-3 pl-8 pr-10 mt-2 bg-white  rounded-2xl hover:ring-1 outline-blue-500"
              />
            </div>
            <div class="w-full px-4 mb-3">
              <label className="ml-4 " for="ThoiGian">
                Thời gian hoàn thành
              </label>

              <input
                type="number"
                name="ThoiGian"
                id="ThoiGian"
                value={`${serviceData.ThoiGian}`}
                onChange={(e) => {
                  setServiceData({
                    ...serviceData,
                    [e.target.name]: e.target.value,
                  });
                }}
                readOnly={status === "View" ? true : false}
                class="w-full py-3 pl-8 pr-10 mt-2 bg-white rounded-2xl hover:ring-1 outline-blue-500"
              />
            </div>
          </div>
          <div>
            {/* <div class="w-full px-4 mb-3">
              <label className="ml-4 " for="TienCongNhanVien">
                Tiền công trả nhân viên
              </label>

              <input
                type="number"
                name="TienCongNhanVien"
                id="TienCongNhanVien"
                value={`${serviceData.TienCongNhanVien}`}
                onChange={(e) => {
                  setServiceData({
                    ...serviceData,
                    [e.target.name]: e.target.value,
                  });
                }}
                readOnly={status === "View" ? true : false}
                class="w-full py-3 pl-8 pr-10 mt-2 bg-white rounded-2xl hover:ring-1 outline-blue-500"
              />
            </div> */}
            <div class="w-full px-4 mb-3">
              <label className="ml-4 " for="Avatar">
                Avatar{" "}
                <span className="text-sm">(Chỉ dành cho dịch vụ chính)</span>
              </label>

              <input
                type="text"
                name="Avatar"
                id="Avatar"
                value={`${serviceData?.Avatar}`}
                onChange={(e) => {
                  setServiceData({
                    ...serviceData,
                    [e.target.name]: e.target.value,
                  });
                }}
                readOnly={status === "View" ? true : false}
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
                value={`${serviceData?.Description}`}
                onChange={(e) => {
                  setServiceData({
                    ...serviceData,
                    [e.target.name]: e.target.value,
                  });
                }}
                readOnly={status === "View" ? true : false}
                class="w-full h py-6 pl-8 pr-10 mt-2 bg-white rounded-2xl hover:ring-1 outline-blue-500"
              />
            </div>
          </div>
        </div>

        {status!== "View" ? <div class="w-full px-8 mt-3 pb-2 flex items-center justify-center">
          <button
            onClick={handleSubmit}
            type="submit"
            class=" py-2 bg-[#194284] w-1/2 rounded-2xl text-blue-50 text-[20px] font-semibold hover:opacity-75"
          >
            Lưu
          </button>
        </div>:<></>}
      </form>
    </div>
  );
};

export default ServiceModal;
