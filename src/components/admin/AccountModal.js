import React, { useEffect, useState } from "react";

const AccountModal = ({data,id,status,setModal,setModalStatus}) => {
 
  const [accountInfor, setAccountInfor] = useState({});
  useEffect(()=>{
    const IdData = data.filter((item)=>{
      return item.IdTaiKhoan === id
    })
    setAccountInfor(IdData[0])
  },[])

  const handleSubmit = (e)=>{
      e.preventDefault()
  }
  
  return (
    <div onClick={()=>{
      setModal(false)
      setModalStatus()
      
    }} className="fixed top-0 right-0 left-0 bottom-0 bg-black/10 z-50 flex items-center justify-center">
      <form
        onClick={(e) => {
          e.stopPropagation();
        }}
        onSubmit={handleSubmit}
        className={`w-[400px] flex flex-col ${status==="View" ? 'bg-gray-200':'bg-gray-200'} rounded relative border border-black `}
      >
        <div
        onClick={()=>{
          setModal(false)
          setModalStatus()
          
        }}
        className=" absolute top-0 right-0 font-bold text-xl w-[25px] h-[30px] bg-red-400 rounded-tr text-white text-center">
          x
        </div>
        <div className="text-xl font-bold mt-5 text-center mb-5">
          Tài Khoản
        </div>
        <div className="grid grid-cols-1 pb-1">
          <div>
            <div class="w-full px-4 mb-3">
              <label onClick={()=>{
                console.log(accountInfor)
              }} className="ml-4 " for="TenDangNhap">
                Tên Đăng Nhập
              </label>

              <input
                type="text"
                name="TenDangNhap"
                id="TenDangNhap"
                value={`${accountInfor.TenDangNhap}`}
                readOnly={status === "View" ? true : false}
                onChange={(e) => {
                  setAccountInfor({
                    ...accountInfor,
                    [e.target.name]: e.target.value.trimStart().trimEnd(),
                  });
                }}
                class="w-full py-3 pl-8 pr-10 mt-2 bg-white  rounded-2xl hover:ring-1 outline-blue-500"
              />
            </div>
            <div class="w-full px-4 mb-3">
              <label className="ml-4 " for="MatKhau">
                Mật Khẩu
              </label>

              <input
                type="text"
                name="MatKhau"
                id="MatKhau"
                value={`${accountInfor.MatKhau}`}
                onChange={(e) => {
                  setAccountInfor({
                    ...accountInfor,
                    [e.target.name]: e.target.value.trimStart().trimEnd(),
                  });
                }}
                readOnly={status === "View" ? true : false}
                class="w-full py-3 pl-8 pr-10 mt-2 bg-white  rounded-2xl hover:ring-1 outline-blue-500"
              />
            </div>
            <div class="w-full px-4 mb-3">
              <label className="ml-4 " for="LoaiTaiKhoan">
                Loại Tài Khoản
              </label>

              <input
                type="text"
                name="LoaiTaiKhoan"
                id="LoaiTaiKhoan"
                value={accountInfor.LoaiTaiKhoan}
                onChange={(e) => {
                  setAccountInfor({
                    ...accountInfor,
                    [e.target.name]: e.target.value.trimStart().trimEnd(),
                  });
                }}
                readOnly={status === "View" ? true : false}
                class="w-full py-3 pl-8 pr-10 mt-2 bg-white  rounded-2xl hover:ring-1 outline-blue-500"
              />
            </div>
            <div class="w-full px-4 mb-3">
              <label className="ml-4 " for="Avatar">
                Avatar
              </label>

              <input
                type="text"
                name="Avatar"
                id="Avatar"
                value={accountInfor.Avatar}
                onChange={(e) => {
                  setAccountInfor({
                    ...accountInfor,
                    [e.target.name]: e.target.value.trimStart().trimEnd(),
                  });
                }}
                readOnly={status === "View" ? true : false}
                class="w-full py-3 pl-8 pr-10 mt-2 bg-white  rounded-2xl hover:ring-1 outline-blue-500"
              />
            </div>
          </div>
        </div>

        {status !== "View"?<div class="w-full px-8 mt-3 pb-2 flex items-center justify-center">
          <button
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

export default AccountModal;
