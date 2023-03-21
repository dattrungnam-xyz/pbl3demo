import React from "react";

const EditProfile = () => {
  
  return (
    <>
      <section className="pt-[62px] min-h-screen flex flex-col items-center justify-center bg-gray-200  ">
        <div className="text-2xl my-6 ">Chỉnh sửa thông tin</div>
        <div className="flex md:min-w-[720px]  px-8 py-6 gap-16 max-md:gap-8 max-md:px-4 h-full bg-white items-cente max-sm:w-full max-sm:flex-col justify-between rounded-lg border">
          <div className="flex justify-center items-center">
            <img
              className="w-[160px] h-[160px] border-2 border-sky-200 object-cover rounded-full"
              src="https://previews.dropbox.com/p/thumb/AB00JfIwDM0Yme3Fm9HFfT-c0o5NveVZA_9Boa9eH2iPyeNBXo57FHdZ7LXhuBVvtZTjnbozS7rOWm2WxnHSU7MgB89JDzQ-fwyuRWSrRlkIacuL-Vb9lyGgvCV6uBpKDw0jT8QSoRiz4OafcrLlTVBIMq5NaUReCeCjIHmIRrqZ9BE8azcbe1otH46y3dgd6t4NGc5AM3Rxc3AotL1P8qlY5l9At4QCVt05xcEYd2I9s1NKzWfYHnvvL9sFlGjKM-_PHa6T4n5LlL0g6ju1sZv9frT9oQ-z9GF1UnxuINQCEaiH8XubqeeU1GVky9AAMX_R7xDnZiBlb3HCgmBzyEifF5bjfZ0-gv0jaw0_IMTw2w9syMlRTP-qI7U62aSptvU/p.jpeg"
              alt=""
            />
          </div>
          <div className=" flex flex-col py-6 px-4">
            <div className=" flex items-center justify-center">
              <div className="min-w-[160px] max-md:min-w-[140px] font-medium ">Tên đăng nhập:</div>
              <input
                className=" py-2 pl-8 pr-8 mb-2  bg-gray-200   rounded-2xl ring-1 outline-none "
                readOnly
                value={"abbb"}
              />
            </div>
            <div className="flex items-center justify-center">
              <div className="min-w-[160px] max-md:min-w-[140px] font-medium">Họ tên:</div>
              <input
                className=" py-2 pl-8 pr-8 mb-2 bg-white  rounded-2xl ring-1 outline-blue-500"
                
                
              />
            </div>
            <div className="flex items-center justify-center">
              <div className="min-w-[160px] max-md:min-w-[140px]  font-medium">Số điện thoại:</div>
              <input
                className=" py-2 pl-8 pr-8 mb-2 bg-white  rounded-2xl ring-1 outline-blue-500"
                
                
              />
            </div>
            <div className="flex items-center justify-center">
              <div className="min-w-[160px] max-md:min-w-[140px] font-medium">Địa chỉ:</div>
              <input
                className=" py-2 pl-8 pr-8 mb-2 bg-white  rounded-2xl ring-1 outline-blue-500"
                
                
              />
            </div>
            <div className="flex items-center justify-center">
              <div className="min-w-[160px] max-md:min-w-[140px] font-medium">Avatar:</div>
              <input
                className=" py-2 pl-8 pr-8 mb-2 bg-white  rounded-2xl ring-1 outline-blue-500"
                
                
              />
            </div>
            <div className="flex items-center justify-center mt-4">
              <button
                type="submit"
                class=" py-1 bg-[#194284] w-[180px] rounded-2xl text-blue-50 text-[20px] font-semibold hover:opacity-75"
              >
                Lưu
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EditProfile;
