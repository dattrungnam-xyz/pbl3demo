import React, { useState, useEffect } from "react";
import { getDataWithToken } from "../../utils/fetchApi";
import { useSelector } from "react-redux";
const ProductModal = ({ status, id, handleModal }) => {
  const user = useSelector((state) => state.auth.login.currentUser);
  const [productData, setProductData] = useState({
    TenSanPham: "",
    GiaBan: "",
    GiaNhap: "",
    IdSanPham: "",
  });
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    id &&
      getDataWithToken(
        `http://localhost:8080/v1/product/${id}`,
        user.token
      ).then((res) => {
        setProductData(res[0]);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(productData);

    console.log(+productData.GiaBan);
    try {
      if (
        !productData.GiaBan.toString().trim() ||
        !productData.GiaNhap.toString().trim() ||
        !productData.TenSanPham.trim() ||
        !productData.GiaBan.toString() ||
        !productData.GiaNhap.toString() ||
        !productData.TenSanPham ||
        +productData.GiaBan <= 0 ||
        +productData.GiaNhap <= 0
      ) {
        setError("Không được để trống thông tin");
        +productData.GiaBan <= 0 && setError("Giá bán phải lớn hơn 0");
        //
        +productData.GiaNhap <= 0 && setError("Giá nhập phải lớn hơn 0");
        !productData.GiaBan && setError("Không được để trống thông tin");
        !productData.GiaNhap && setError("Không được để trống thông tin");
      } else {
        status === "Add" &&
          (await fetch("http://localhost:8080/v1/product/", {
            method: "post",
            headers: {
              "Content-Type": "application/json",
              token: `${user.token}`,
            },
            body: JSON.stringify(productData),
          })
            .then((res) => res.json())
            .then((res) => {
              setMessage(res.message);
              setError(res.error);
            }));

        status === "Edit" &&
          (await fetch(`http://localhost:8080/v1/product/${id}`, {
            method: "post",
            headers: {
              "Content-Type": "application/json",
              token: `${user.token}`,
            },
            body: JSON.stringify(productData),
          })
            .then((res) => res.json())
            .then((res) => {
              console.log(res);
              setMessage(res.message);
              setError(res.error);
            }));
        //   handleModal();
        //console.log(productData)
      }
    } catch (error) {}
  };
  const handleRemoveProduct = async () =>{
    (await fetch(`http://localhost:8080/v1/product/${id}`, {
            method: "delete",
            headers: {
              "Content-Type": "application/json",
              token: `${user.token}`,
            },
           
          })
            .then((res) => {
              res.ok && handleModal()
            })
            );
  }
  return (
    <>
     {status === "Remove" && (
        <div >
          
          <div
            onClick={() => {
             handleModal()
            }}
            className=" fixed top-0 right-0 left-0 bottom-0 bg-black/10 z-50 flex items-center justify-center"
          >
            <div
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="border border-gray w-[200px] h-[180px] bg-gray-300 relative"
            >
              <div
                onClick={() => {
                 handleModal()
                }}
                className=" absolute top-0 right-0 font-bold text-xl w-[25px] h-[30px] bg-red-400 rounded-tr text-white text-center"
              >
                x
              </div>
              <div
                className=" mt-6 text-md font-semibold
             p-4"
              >
                Bạn có chắc chắn xóa sản phẩm này không. 
              </div>

              <div className=" px-4 py-2 flex justify-between">
                <button
                  onClick={()=>{

                   handleRemoveProduct();
                  }}
                  className="py-2 px-5 bg-red-400 rounded"
                >
                  Xóa
                </button>
                <button
                  onClick={(e) => {
                   handleModal()
                  }}
                  false
                  className="py-2 px-5  bg-blue-400 rounded"
                >
                  Hủy
                </button>
              </div>
            </div>
          </div>
          
        </div>
      )}
    {
      status !== "Remove" && <>
      <div
      onClick={() => {
        handleModal();
      }}
      className="fixed top-0 right-0 left-0 bottom-0 bg-black/10 z-50 flex items-center justify-center"
    >
      <form
        onClick={(e) => {
          e.stopPropagation();
        }}
        onSubmit={handleSubmit}
        className="w-[400px] flex flex-col bg-gray-200 rounded relative border border-black "
      >
        <div
          onClick={() => {
            handleModal();
          }}
          className=" absolute top-0 right-0 font-bold text-xl w-[25px] h-[30px] bg-red-400 rounded-tr text-white text-center"
        >
          x
        </div>
        <div className="text-xl font-bold mt-5 text-center mb-5">
          {status === "Add" && "Thêm "} Sản Phẩm Bán Kèm
        </div>
        <div className="grid grid-cols-1">
          <div>
            <div class="w-full px-4 mb-3">
              <label className="ml-4 " for="TenSanPham">
                Tên Sản Phẩm <span className="text-[red]">*</span>
              </label> 

              <input
                type="text"
                value={`${productData.TenSanPham}`}
                onChange={(e) => {
                  setProductData({
                    ...productData,
                    [e.target.name]: e.target.value,
                  });
                  setError();
                  setMessage();
                }}
                name="TenSanPham"
                id="TenSanPham"
                class="w-full py-3 pl-8 pr-10 mt-2 bg-white  rounded-2xl hover:ring-1 outline-blue-500"
                readOnly={status === "View" ? true : false}
              />
            </div>
            <div class="w-full px-4 mb-3">
              <label className="ml-4 " for="GiaBan">
                Giá Bán <span className="text-[red]">*</span>
              </label>

              <input
                type="number"
                name="GiaBan"
                id="GiaBan"
                min={0}
                value={`${productData.GiaBan}`}
                onChange={(e) => {
                  setProductData({
                    ...productData,
                    [e.target.name]: e.target.value,
                  });
                  setError();
                  setMessage();
                }}
                readOnly={status === "View" ? true : false}
                class="w-full py-3 pl-8 pr-10 mt-2 bg-white rounded-2xl hover:ring-1 outline-blue-500"
              />
            </div>
            <div class="w-full px-4 mb-3">
              <label className="ml-4 " for="GiaNhap">
                Giá nhập <span className="text-[red]">*</span>
              </label>

              <input
                type="number"
                name="GiaNhap"
                id="GiaNhap"
                value={`${productData.GiaNhap}`}
                min={0}
                onChange={(e) => {
                  setProductData({
                    ...productData,
                    [e.target.name]: e.target.value,
                  });
                  setError();
                  setMessage();
                }}
                readOnly={status === "View" ? true : false}
                class="w-full py-3 pl-8 pr-10 mt-2 bg-white  rounded-2xl hover:ring-1 outline-blue-500"
              />
            </div>
          </div>
        </div>
        {error && (
          <p className="block text-sm text-center text-red-900 ">{error}</p>
        )}
        {message && (
          <p className="block text-sm text-center text-green-900 ">{message}</p>
        )}
        {status !== "View" ? (
          <div class="w-full px-8 mt-3 pb-2 flex items-center justify-center">
            <button
              onClick={handleSubmit}
              type="submit"
              class=" py-2 bg-[#194284] w-1/2 rounded-2xl text-blue-50 text-[20px] font-semibold hover:opacity-75"
            >
              Lưu
            </button>
          </div>
        ) : (
          <></>
        )}
      </form>
    </div>
      </>
    }
    </>
   
  );
};

export default ProductModal;
