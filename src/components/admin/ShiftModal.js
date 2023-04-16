import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const ShiftModal = ({ setModal, staffDataModal, shiftData }) => {
  const user = useSelector((state) => state.auth.login.currentUser);
  const [error, setError] = useState();
  const [message, setMessage] = useState();
  const [staffShiftData, setStaffShiftData] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(staffShiftData);

    await fetch("http://localhost:8080/v1/shift", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        token: `${user.token}`,
      },
      body: JSON.stringify(staffShiftData),
    }).then((res) => {
      res.ok && setMessage("Update successfully")
      !res.ok && setError("Error")
      console.log(res)
      //setModal(false);
    });
  };
  useEffect(() => {
    setStaffShiftData(
      shiftData.filter((item) => {
        return item.IdNhanVien === staffDataModal.IdNhanVien;
      })
    );
    console.log(staffShiftData);
  }, []);
  return (
    <div
      onClick={(e) => {
        setModal(false);
      }}
      className="fixed top-0 right-0 left-0 bottom-0 bg-black/10 z-50 flex items-center justify-center"
    >
      <form
        onSubmit={handleSubmit}
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
        <div className="text-xl font-bold mt-5 text-center mb-5">Ca làm</div>
        <div className="grid grid-cols-1">
          <div>
            <div class="w-full px-4 mb-3">
              <label className="ml-4 " for="username">
                Họ Tên
              </label>

              <input
                type="text"
                name="HoTen"
                id="HoTen"
                readOnly
                value={staffDataModal?.HoTen}
                class="w-full py-3 pl-8 pr-10 mt-2 bg-white rounded-2xl hover:ring-1 outline-blue-500"
              />
            </div>
          </div>
          <div className="grid grid-cols-7 w-full px-4 min-h-[40px] mt-4">
            <div className="flex items-center justify-center border border-black font-semibold bg-slate-400 text-gray-900">
              Chủ Nhật
            </div>
            <div className="flex items-center justify-center border border-black font-semibold bg-slate-400 text-gray-900">
              Thứ 2
            </div>
            <div className="flex items-center justify-center border border-black font-semibold bg-slate-400 text-gray-900">
              Thứ 3
            </div>
            <div className="flex items-center justify-center border border-black font-semibold bg-slate-400 text-gray-900">
              Thứ 4
            </div>
            <div className="flex items-center justify-center border border-black font-semibold bg-slate-400 text-gray-900">
              Thứ 5
            </div>
            <div className="flex items-center justify-center border border-black font-semibold bg-slate-400 text-gray-900">
              Thứ 6
            </div>
            <div className="flex items-center justify-center border border-black font-semibold bg-slate-400 text-gray-900">
              Thứ 7
            </div>
          </div>
          <div className="grid grid-cols-7 grid-row-3 w-full px-4 mb-4">
            {staffShiftData.map((item, index) => {
              return (
                <div
                  onClick={() => {
                    const temp = [...staffShiftData];
                    if (item.AnCaLam === 1) {
                      temp[index] = { ...temp[index], AnCaLam: 0 };
                    } else {
                      temp[index] = { ...temp[index], AnCaLam: 1 };
                    }
                    setStaffShiftData(temp);
                    setMessage()
                    setError()
                  }}
                  className="flex min-h-[30px] items-center justify-center border border-black"
                >
                  {item.AnCaLam === 0 ? "x" : ""}
                </div>
              );
            })}
          </div>
        </div>
        {error && (
          <p className=" block text-center text-sm text-red-900 ">{error}</p>
        )}
        {message && (
          <p className=" block text-center text-sm text-green-900 ">{message}</p>
        )}
        <div class="w-full px-8 mt-3 pb-2 flex items-center justify-center">
          <button
            type="submit"
            class=" py-2 bg-[#194284] w-1/2 rounded-2xl text-blue-50 text-[20px] font-semibold hover:opacity-75"
          >
            Lưu
          </button>
        </div>
      </form>
    </div>
  );
};

export default ShiftModal;
