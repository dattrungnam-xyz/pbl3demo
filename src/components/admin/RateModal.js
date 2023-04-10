import React from "react";

const RateModal = ({ setModal, data }) => {
  return (
    <div
      onClick={(e) => {
        setModal(false);
      }}
      className="fixed top-0 right-0 left-0 bottom-0 bg-black/10 z-50 flex items-center justify-center"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="w-[900px] flex flex-col bg-gray-200 rounded relative border border-black "
      >
        <div
          onClick={() => {
            setModal(false);
          }}
          className=" absolute top-0 right-0 font-bold text-xl w-[25px] h-[30px] bg-red-400 rounded-tr text-white text-center"
        >
          x
        </div>
        <div className="text-xl font-bold mt-5 text-center mb-5">
          Đánh Giá Dịch Vụ
        </div>

        <>
          <div className={`grid grid-cols-2`}>
            <div>
              <div class="w-full px-4 mb-3">
                <label className="ml-4 " for="IdLich">
                  Id Lịch
                </label>

                <input
                  type="text"
                  name="IdLich"
                  id="IdLich"
                  readOnly
                  value={data.IdLich}
                  class="w-full py-3 pl-8 pr-10 mt-2 bg-white rounded-2xl hover:ring-1 outline-blue-500"
                />
              </div>
              <div class="w-full px-4 mb-3">
                <label className="ml-4 ">Người Đặt</label>
                <div className="flex gap-2 items-center justify-start py-3 pl-8 pr-10 mt-2 bg-white  rounded-2xl hover:ring-1 ">
                  <img
                    className="w-[20px] h-[20px] rounded-full border "
                    src={
                      data.inforDetail[0].AvatarKH
                        ? data.inforDetail[0].AvatarKH
                        : "https://t3.ftcdn.net/jpg/00/64/67/80/360_F_64678017_zUpiZFjj04cnLri7oADnyMH0XBYyQghG.jpg"
                    }
                    alt=""
                  />
                  <p>{data.inforDetail[0].HoTenKH}</p>
                </div>
              </div>
              <div class="w-full px-4 mb-3">
                <label className="ml-4 " for="IdLich">
                  Số Sao Dịch Vụ
                </label>

                <input
                  type="text"
                  name="IdLich"
                  id="IdLich"
                  readOnly
                  value={data.SoSaoDV}
                  class="w-full py-3 pl-8 pr-10 mt-2 bg-white rounded-2xl hover:ring-1 outline-blue-500"
                />
              </div>
              <div class="w-full px-4 mb-3">
                <label className="ml-4 " for="Description">
                  Mô Tả Dịch Vụ
                </label>

                <textarea
                  type="text"
                  name="Description"
                  id="Description"
                  rows="4"
                  cols="50"
                  value={`${data.MoTaDV}`}
                  readOnly
                  class="w-full h py-6 pl-8 pr-10 mt-2 bg-white rounded-2xl hover:ring-1 outline-blue-500"
                />
              </div>
            </div>
            <div>
              <div class="w-full px-4 mb-3">
                <label className="ml-4 " for="IdLich">
                  Ngày Cắt
                </label>

                <input
                  type="text"
                  name="IdLich"
                  id="IdLich"
                  readOnly
                  value={`${
                    data.inforDetail[0].GioCat +
                    " " +
                    data.inforDetail[0].NgayCat.slice(0, 10)
                  }`}
                  class="w-full py-3 pl-8 pr-10 mt-2 bg-white rounded-2xl hover:ring-1 outline-blue-500"
                />
              </div>
              <div class="w-full px-4 mb-3">
                <label className="ml-4 ">Thợ Cắt</label>
                <div className="flex gap-2 items-center justify-start py-3 pl-8 pr-10 mt-2 bg-white  rounded-2xl hover:ring-1 ">
                  <img
                    className="w-[20px] h-[20px] rounded-full border "
                    src={
                      data.inforDetail[0].AvatarNV
                        ? data.inforDetail[0].AvatarNV
                        : "https://t3.ftcdn.net/jpg/00/64/67/80/360_F_64678017_zUpiZFjj04cnLri7oADnyMH0XBYyQghG.jpg"
                    }
                    alt=""
                  />
                  <p>{data.inforDetail[0].HoTenNV}</p>
                </div>
              </div>
              <div class="w-full px-4 mb-3">
                <label className="ml-4 " for="SoSaoNV">
                  Số Sao Nhân Viên
                </label>

                <input
                  type="text"
                  name="SoSaoNV"
                  id="SoSaoNV"
                  readOnly
                  value={data.SoSaoNV}
                  class="w-full py-3 pl-8 pr-10 mt-2 bg-white rounded-2xl hover:ring-1 outline-blue-500"
                />
              </div>
              <div class="w-full px-4 mb-3">
                <label className="ml-4 " for="Description">
                  Mô Tả Nhân Viên
                </label>

                <textarea
                  type="text"
                  name="Description"
                  id="Description"
                  rows="4"
                  cols="50"
                  value={`${data.MoTaNV}`}
                  readOnly
                  class="w-full h py-6 pl-8 pr-10 mt-2 bg-white rounded-2xl hover:ring-1 outline-blue-500"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 justify-end w-full px-4 mb-3 ">
            <div></div>
            <div className="pl-12">
              {" "}
              {/* Tổng Hóa Đơn: {productCost + serviceCost} VND */}
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default RateModal;
