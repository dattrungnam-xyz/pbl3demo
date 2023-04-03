import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const BookingInforModal = ({ status, dataRemove, setModal }) => {


  const user = useSelector(state => state.auth.login.currentUser)
  const [message, setMessage] = useState();
  const handleRemove = async () => {
    await fetch("http://localhost:8080/v1/booking/remove", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "token": `${user.token}`
      },
      body: JSON.stringify(dataRemove),
    });

   await setModal(false)
  };
  const handleModal = () => {
    setModal(false);
  };

  useEffect(() => {
    const NgayCat = new Date(dataRemove.NgayCat);
    const now = new Date();
    // 2 ngay : 172800000
    if (+NgayCat.getTime() - +now.getTime() < 172800000) {
      setMessage("Không được hủy lịch khi lịch đặt còn ít hơn 2 ngày");
    }
  }, [dataRemove]);
  return (
    <>
      {status === "View" && <div></div>}
      {status === "Remove" && (
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
            className=" w-[200px] h-[200px] bg-gray-300 relative"
          >
            <div
              onClick={() => {
                handleModal();
              }}
              className=" absolute top-0 right-0 font-bold text-xl w-[25px] h-[30px] bg-red-400 rounded-tr text-white text-center"
            >
              x
            </div>
            <div
              className=" mt-6 text-md font-semibold
             p-4"
            >
              {message ? message : "Bạn có chắc chắn xóa lịch đặt này không."}
            </div>

            {!message && (
              <div className=" px-4 py-2 flex justify-between">
                <button
                  onClick={handleRemove}
                  className="py-2 px-5 bg-red-500 rounded"
                >
                  Xóa
                </button>
                <button
                  onClick={handleModal}
                  className="py-2 px-5  bg-blue-500 rounded"
                >
                  Hủy
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default BookingInforModal;
