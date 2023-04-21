import React, { useState, useEffect } from "react";
import { useSelector} from "react-redux";


const Password = () => {
  const user = useSelector((state) => state.auth.login.currentUser);
  const [password, setPassword] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const handleSubmit = async (e) => {
    setError()
    setMessage()
    e.preventDefault();

    let pattern = /\s/g;
    if (
      !password.oldPassword.match(pattern) &&
      !password.newPassword.match(pattern) &&
      password.newPassword === password.confirmPassword &&
      password.confirmPassword &&
      password.oldPassword &&
      password.newPassword && 
      password.newPassword.length >=6
    )
    {
      await fetch(`http://localhost:8080/v1/auth/changepassword/${user.id}`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          token: `${user.token}`,
        },
        body: JSON.stringify(password),
      })
        .then((res) => res.json())
        .then((res) => {
          
          res.message && setMessage(res.message)
          res.error && setError(res.error)
        });
    }
    else
    {
        if(
            password.newPassword!== password.confirmPassword )
            {
                setError("Mật khẩu mới không khớp")
            }
        if(
        password.newPassword.match(pattern) )
        {
            setError("Mật khẩu mới sai định dạng")
        }
        if(password.newPassword.length <6)
        {
            setError("Mật khẩu mới phải có ít nhất 6 kí tự")
        }
        if (!password.confirmPassword ||
            !password.oldPassword ||
            !password.newPassword  ){
                setError("Không được để trống thông tin")
            }
    }
      console.log(password);
  };
  const handleChange = (e) => {
    setError()
    setMessage()
    setPassword({
      ...password,
      [e.target.name]: e.target.value,
    });
  };
  const [error, setError] = useState();
  const [message, setMessage] = useState();

  return (
    <>
      <section className="pt-[62px] min-h-screen flex flex-col items-center justify-center bg-gray-200  ">
        <div className="text-2xl my-6 ">Đổi mật khẩu</div>
        <form onSubmit={handleSubmit}>
          <div className="flex items-center justify-center md:min-w-[720px]  px-8 py-6 gap-16 max-md:gap-8 max-md:px-4 h-full bg-white items-cente max-sm:w-full max-sm:flex-col rounded-lg border">
            <div className=" flex flex-col py-6 px-4 h-full">
              <div className="flex items-center justify-center">
                <label
                  htmlFor="oldPassword"
                  className="min-w-[220px] max-md:min-w-[180px] font-medium"
                >
                  Mật khẩu hiện tại<span className="text-[red]">*</span> :
                </label>
                <input
                type="password"
                  className=" py-2 pl-8 pr-8 mb-2 bg-white  rounded-2xl ring-1 outline-blue-500"
                  name="oldPassword"
                  value={password.oldPassword}
                  onChange={handleChange}
                />
              </div>
              <div className="flex items-center justify-center">
                <label
                  htmlFor="newPassword"
                  className="min-w-[220px] max-md:min-w-[180px] font-medium"
                >
                  Mật khẩu mới<span className="text-[red]">*</span> :
                </label>
                <input
                  className=" py-2 pl-8 pr-8 mb-2 bg-white  rounded-2xl ring-1 outline-blue-500"
                  name="newPassword"
                  value={password.newPassword}
                  onChange={handleChange}
                  type="password"
                />
              </div>
              <div className="flex items-center justify-center">
                <label
                  htmlFor="confirmPassword"
                  className="min-w-[220px] max-md:min-w-[180px] font-medium"
                >
                  Nhập lại mật khẩu mới<span className="text-[red]">*</span> :
                </label>
                <input
                  className=" py-2 pl-8 pr-8 mb-2 bg-white  rounded-2xl ring-1 outline-blue-500"
                  name="confirmPassword"
                  value={password.confirmPassword}
                  onChange={handleChange}
                  type="password"
                />
              </div>
              <div className="flex h-full flex-col items-center justify-center mt-4">
                {message ? (
                  <p className="mb-4 text-[green]">{message}</p>
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

export default Password;
