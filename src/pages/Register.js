import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { SubNavbar } from "../components";

const Register = () => {
  const navigate = useNavigate();
  const [showPassWord, setShowPassWord] = useState(false);
  const [registerError, setRegisterError] = useState("");
  const [account, setAccount] = useState({
    username: "",
    password: "",
    name: "",
    phone: "",
    type: "user",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("http://localhost:8080/v1/auth/register", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(account),
      })
        .then(
          (res) => res.json()
          // if (res.status === 400) {
          //   setRegisterError(true);
          // }
          // if (res.status === 201) {
          //   setRegisterError(false);
          //   navigate("/Login");

          // }
        )
        .then((res) => {
          if (res.error !== "") {
            setRegisterError(res.error)
          }
          else{
            setRegisterError("")
            navigate("/Login");
          }
        });
      // .then((res) => dispatch(registerSuccess()))
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e) => {
    setAccount({
      ...account,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <SubNavbar login={true} />
      <div class="bg-gray-10 mt-[62px] flex items-center justify-center">
        <div class="flex justify-center h-full w-[800px]  items-center">
          <form
            class="w-full md:w-1/2 flex flex-col items-center pt-2"
            onSubmit={handleSubmit}
          >
            <h1 class="text-center text-[35px] font-semibold text-gray-600 mb-6">
              Đăng kí
            </h1>

            <div class="w-3/4 mb-3">
              <label className="ml-4 " for="username">
                Tên đăng nhập
              </label>

              <input
                type="text"
                name="username"
                id="username"
                value={account.username}
                onChange={handleChange}
                class="w-full py-3 pl-8 pr-10 mt-2 bg-slate-200  rounded-2xl hover:ring-1 outline-blue-500"
              />
            </div>

            <div class="w-3/4 mb-3 relative">
              <label className="ml-4 " for="password">
                Mật khẩu
              </label>
              {showPassWord ? (
                <input
                  type="text"
                  name="password"
                  id="password"
                  value={account.password}
                  onChange={handleChange}
                  class="w-full py-3 pl-8 pr-10 mt-2 bg-slate-200  rounded-2xl hover:ring-1 outline-blue-500"
                />
              ) : (
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={account.password}
                  onChange={handleChange}
                  class="w-full py-3 pl-8 pr-10 mt-2 bg-slate-200  rounded-2xl hover:ring-1 outline-blue-500"
                />
              )}
              <div
                onClick={() => {
                  setShowPassWord(!showPassWord);
                }}
                class="absolute right-0 top-[50%] translate-y-[3px] mr-[8px] cursor-pointer opacity-80"
              >
                {showPassWord ? (
                  <box-icon id="show" name="show"></box-icon>
                ) : (
                  <box-icon id="hide" name="hide"></box-icon>
                )}
              </div>
            </div>

            <div class="w-3/4 mb-3">
              <label className="ml-4 " for="name">
                Họ tên
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={account.name}
                onChange={handleChange}
                class="w-full py-3 pl-8 pr-10 mt-2 bg-slate-200  rounded-2xl hover:ring-1 outline-blue-500"
              />
            </div>
            <div class="w-3/4 mb-3">
              <label className="ml-4 " for="phone">
                Số điện thoại
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                value={account.phone}
                onChange={handleChange}
                class="w-full py-3 pl-8 pr-10 mt-2 bg-slate-200  rounded-2xl hover:ring-1 outline-blue-500"
              />
            </div>
                {registerError ? <p className="w-3/4 text-left text-sm text-[red]">{registerError}. Vui lòng nhập lại</p> : <></>}
            <div class="w-3/4 mt-3">
              <button
                type="submit"
                class=" py-2 bg-[#194284] w-full rounded-2xl text-blue-50 text-[20px] font-semibold hover:opacity-75"
              >
                Đăng kí
              </button>
            </div>
            <div class="w-3/4 flex flex-row justify-center items-center gap-2 mt-4">
              <p class="text-[#5A5A77]">Bạn đã có tài khoản?</p>
              <Link to={"/Login"} class=" text-[#5A5A77] underline">
                Đăng nhập
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
