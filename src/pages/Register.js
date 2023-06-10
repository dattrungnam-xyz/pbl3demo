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
  const check = () => {};
  const handleSubmit = async (e) => {
    const reg = RegExp("^[0-9]+$");
    let pattern = /\s/g;

     console.log(
       account.username &&
      account.password.length > 6 &&
      account.name.trim() &&
      reg.test(account.phone) &&
      account.phone.length <= 11 &&
      account.phone.length > 9
      &&!account.password.match(pattern)
        &&!account.username.match(pattern)
       );
    e.preventDefault();
    if (
      account.username &&
      account.password.length >= 6 &&
      account.name.trim() &&
      reg.test(account.phone) &&
      account.phone.length <= 11 &&
      account.phone.length > 9
      &&!account.password.match(pattern)
      &&!account.username.match(pattern)

    ) {
      try {
        await fetch("http://localhost:8080/v1/auth/register", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(account),
        })
          .then((res) => res.json())
          .then((res) => {
            console.log(res)
            if (res.error !== "") {
              setRegisterError(res.error);
            } else {
              setRegisterError("");
              navigate("/Login");
            }
          });
        //.then((res) => dispatch(registerSuccess()))
      } catch (error) {}
    } else {
      account.password.length < 6 &&
        setRegisterError("Mật khẩu phải dài hơn 6 kí tự");
      account.phone.length > 11 &&
        setRegisterError("Số điện thoại phải từ 10-11 kí tự");
      account.phone.length < 10 &&
        setRegisterError("Số điện thoại phải từ 10-11 kí tự");
      !reg.test(account.phone) &&
        setRegisterError("Sai định dạng số điện thoại");
      !account.name.trim() && setRegisterError("Sai định dạng họ tên");
      account.password.match(pattern)&& setRegisterError("Mật khẩu không được chứa kí tự khoảng trắng")
      account.username.match(pattern)&& setRegisterError("Tên đăng nhập không được chứa kí tự khoảng trắng")
    }

    (!account.password ||
      !account.name ||
      !account.phone ||
      !account.username) &&
      setRegisterError("Vui lòng điền đầy đủ thông tin");
  };
  const handleChange = (e) => {
    setRegisterError();
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
                Tên đăng nhập <span className="text-[red]">*</span>
              </label>

              <input
                type="text"
                name="username"
                id="username"
                value={account.username}
                onChange={(e) => {
                  setRegisterError();
                  setAccount({
                    ...account,
                    [e.target.name]: e.target.value,
                  });
                }}
                class="w-full py-3 pl-8 pr-10 mt-2 bg-slate-200  rounded-2xl hover:ring-1 outline-blue-500"
              />
            </div>

            <div class="w-3/4 mb-3 relative">
              <label className="ml-4 " for="password">
                Mật khẩu <span className="text-[red]">*</span>
              </label>
              {showPassWord ? (
                <input
                  type="text"
                  name="password"
                  id="password"
                  value={account.password}
                  onChange={(e) => {
                    setRegisterError();
                    setAccount({
                      ...account,
                      [e.target.name]: e.target.value,
                    });
                  }}
                  class="w-full py-3 pl-8 pr-10 mt-2 bg-slate-200  rounded-2xl hover:ring-1 outline-blue-500"
                />
              ) : (
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={account.password}
                  onChange={(e) => {
                    setRegisterError();
                    setAccount({
                      ...account,
                      [e.target.name]: e.target.value,
                    });
                  }}
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
                Họ tên <span className="text-[red]">*</span>
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
                Số điện thoại <span className="text-[red]">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={account.phone}
                onChange={(e) => {
                  setRegisterError();
                  setAccount({
                    ...account,
                    [e.target.name]: e.target.value.trimStart().trimEnd(),
                  });
                }}
                class="w-full py-3 pl-8 pr-10 mt-2 bg-slate-200  rounded-2xl hover:ring-1 outline-blue-500"
              />
            </div>
            {registerError ? (
              <p className="w-3/4 text-left text-sm text-[red]">
                {registerError}. Vui lòng nhập lại
              </p>
            ) : (
              <></>
            )}
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
