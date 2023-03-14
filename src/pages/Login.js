import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import {useDispatch} from 'react-redux'
import {loginUser} from '../redux/apiRequest'
 import { useSelector } from "react-redux";


import { SubNavbar } from "../components";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state)=> state.auth.login.currentUser)

  const [showPassWord, setShowPassWord] = useState(false);
  const [account,setAccount] = useState({
    username: "",
    password:""
  })


  const handleSubmit = (e) => {
    e.preventDefault();

    loginUser(account,dispatch,navigate)

  };
  const handleChange =(e) => {
    setAccount({
      ...account,
      [e.target.name] : e.target.value
    })
  }

    return (
      <>
     
        <SubNavbar login={false} />
        <div className="bg-gray-10 flex mt-[62px] items-center justify-center">
          <div class="flex justify-center h-full mt-4 w-[800px] items-center">
            <form
              className="w-full md:w-1/2 flex flex-col items-center"
              onSubmit={handleSubmit}
            >
              {/* <div class="w-full md:w-1/2 flex flex-col items-center"> */}
              <h1 class="text-center text-[35px] font-semibold text-gray-600 mb-12">
                Đăng nhập
              </h1>
  
              <div class="w-3/4 mb-4">
                <label className="ml-4 " for="username">
                  Tên đăng nhập
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  value={account.username}
                  onChange={handleChange}
                  class="w-full py-3 pl-8 mt-2 pr-10 bg-slate-200  rounded-2xl hover:ring-1 outline-blue-500"
                />
              </div>
  
              <div class="w-3/4 mb-4 relative">
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
                    class="w-full py-3 pl-8 mt-2 pr-10 bg-slate-200  rounded-2xl hover:ring-1 outline-blue-500"
                  />
                ) : (
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={account.password}
                    onChange={handleChange}
                    class="w-full py-3 pl-8 mt-2 pr-10 bg-slate-200  rounded-2xl hover:ring-1 outline-blue-500"
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
  
              <div class="w-3/4 mt-6">
                <button
                  type="submit"
                  class=" py-2 bg-[#194284] w-full rounded-2xl text-blue-50 text-[20px] font-semibold hover:opacity-75"
                    onClick={handleSubmit}
                >
                  Đăng nhập
                </button>
              </div>
              <div class="w-3/4 flex flex-row justify-center items-center gap-2 mt-4">
                <p class="text-[#5A5A77]">Bạn chưa có tài khoản?</p>
                <Link to={"/Register"} class=" text-[#5A5A77] underline">
                  Đăng kí
                </Link>
              </div>
              {/* </div> */}
            </form>
          </div>
        </div>
      
      </>
    );
  };
  
 
export default Login;
