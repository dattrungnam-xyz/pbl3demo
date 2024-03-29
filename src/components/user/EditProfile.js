import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

const EditProfile = () => {
  const { id } = useParams();
  const user = useSelector((state) => state.auth.login.currentUser);

  const [inforUser, setInforUser] = useState({
    username: "",
    name: "",
    phone: "",
    address: "",
    avatar: "",
    newAvatar: "",
  });
  const [messageUpdate, setMessageUpdate] = useState("");
  const [error, setError] = useState("");

  const [imgAvatar, setImgAvatar] = useState("");
  const handleChange = (e) => {
    setInforUser({
      ...inforUser,
      [e.target.name]: e.target.value,
    });
    setMessageUpdate("");
    setError("");
  };
  const fetchData = async (id) => {
    const { data } = await axios.get(
      `http://localhost:8080/v1/account/infor/${id}`,
      {
        headers: {
          token: user.token,
        },
      }
    );

    return data;
  };
  const handleSubmit = async (e) => {
    const reg = RegExp("^[0-9]+$");
    e.preventDefault();
    if (
      inforUser.username &&
      inforUser.name.trim() &&
      reg.test(inforUser.phone) &&
      inforUser.phone.length <= 11 &&
      inforUser.phone.length > 9
    ) {
      await fetch(`http://localhost:8080/v1/account/infor/${id}`, {
        method: "put",
        headers: {
          "Content-Type": "application/json",
          token: `${user.token}`,
        },
        body: JSON.stringify(inforUser),
      })
        .then((res) => res.json())
        .then((res) => setMessageUpdate(res.message));
      setImgAvatar(inforUser.avatar);
    } else {
      inforUser.phone.length > 11 &&
        setError("Số điện thoại phải từ 10-11 kí tự");
      inforUser.phone.length < 10 &&
        setError("Số điện thoại phải từ 10-11 kí tự");
      !reg.test(inforUser.phone) && setError("Sai định dạng số điện thoại");
      !inforUser.name.trim() && setError("Sai định dạng họ tên");

      (!inforUser.name || !inforUser.phone || !inforUser.username) &&
        setError("Vui lòng điền đầy đủ thông tin");
    }
  };

  useEffect(() => {
    fetchData(id).then((res) => {
      setInforUser(res);
      setImgAvatar(res.avatar);
    });
  }, [id]);
  return (
    <>
      <section className="pt-[62px] min-h-screen flex flex-col items-center justify-center bg-gray-200  ">
        <div className="text-2xl my-6 ">Chỉnh sửa thông tin</div>
        <form onSubmit={handleSubmit}>
          <div className="flex md:min-w-[720px]  px-8 py-6 gap-16 max-md:gap-8 max-md:px-4 h-full bg-white items-cente max-sm:w-full max-sm:flex-col justify-between rounded-lg border">
            <div className="flex justify-center items-center">
              {imgAvatar ? (
                <img
                  className="w-[160px] h-[160px] border-2 border-sky-200 object-cover rounded-full"
                  src={imgAvatar}
                  alt=""
                />
              ) : (
                <img
                  className="w-[160px] h-[160px] border-2 border-sky-200 object-cover rounded-full"
                  src={
                    "https://t3.ftcdn.net/jpg/00/64/67/80/360_F_64678017_zUpiZFjj04cnLri7oADnyMH0XBYyQghG.jpg"
                  }
                  alt=""
                />
              )}
            </div>
            <div className=" flex flex-col py-6 px-4 h-full">
              <div className=" flex items-center justify-center ">
                <div className="min-w-[160px] max-md:min-w-[140px] font-medium ">
                  Tên đăng nhập:
                </div>
                <input
                  className=" py-2 pl-8 pr-8 mb-2  bg-gray-200   rounded-2xl ring-1 outline-none "
                  readOnly
                  value={inforUser?.username}
                  name="username"
                />
              </div>
              <div className="flex items-center justify-center">
                <div className="min-w-[160px] max-md:min-w-[140px] font-medium">
                  Họ tên<span className="text-[red]">*</span> :
                </div>
                <input
                  className=" py-2 pl-8 pr-8 mb-2 bg-white  rounded-2xl ring-1 outline-blue-500"
                  name="name"
                  value={inforUser?.name}
                  onChange={handleChange}
                />
              </div>
              <div className="flex items-center justify-center">
                <div className="min-w-[160px] max-md:min-w-[140px]  font-medium">
                  Số điện thoại<span className="text-[red]">*</span> :
                </div>
                <input
                  type="number"
                  className=" py-2 pl-8 pr-8 mb-2 bg-white  rounded-2xl ring-1 outline-blue-500"
                  name="phone"
                  value={inforUser?.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="flex items-center justify-center">
                <div className="min-w-[160px] max-md:min-w-[140px] font-medium">
                  Địa chỉ:
                </div>
                <input
                  className=" py-2 pl-8 pr-8 mb-2 bg-white  rounded-2xl ring-1 outline-blue-500"
                  name="address"
                  value={inforUser?.address}
                  onChange={handleChange}
                />
              </div>
              <div className="flex items-center justify-center">
                <div className="min-w-[160px] max-md:min-w-[140px] font-medium">
                  Avatar:
                </div>
                <input
                  className=" py-2 pl-8 pr-8 mb-2 bg-white  rounded-2xl ring-1 outline-blue-500"
                  name="avatar"
                  value={inforUser?.avatar}
                  onChange={handleChange}
                />
              </div>
              <div className="flex h-full flex-col items-center justify-center mt-4">
                {messageUpdate ? (
                  <p className="mb-4 text-[green]">{messageUpdate}</p>
                ) : (
                  <></>
                )}
                {error ? <p className="mb-4 text-[red]">{error}</p> : <></>}
                <button
                  type="submit"
                  class=" py-1 bg-[#194284] w-[180px] rounded-2xl text-blue-50 text-[20px] font-semibold hover:opacity-75"
                >
                  Lưu
                </button>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default EditProfile;
