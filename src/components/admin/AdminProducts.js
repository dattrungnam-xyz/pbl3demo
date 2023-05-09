import React, { useState, useEffect } from "react";
import { getDataWithToken } from "../../utils/fetchApi";
import { useSelector } from "react-redux";
import ProductModal from "./ProductModal";

const AdminProducts = () => {
  const [productData, setProductData] = useState();
  const [search, setSearch] = useState("");

  const [modal, setModal] = useState(false);
  const [modalStatus, setModalStatus] = useState();

  const [idProductModal, setIdProductModal] = useState(0);

  const user = useSelector((state) => state.auth.login.currentUser);

  useEffect(() => {
    user &&
      getDataWithToken("http://localhost:8080/v1/product/", user.token).then(
        (res) => {
          setProductData(res.filter(item => item.An===0));
          console.log(res);
        }
      );
  }, [modal]);

  const handleModal = () => {
    setModal(false);
    setIdProductModal(0);
    setModalStatus();
  };
  return (
    <>
      {user.type === "admin" ? (
        <>
          <section className="flex flex-col w-full max-w-[80vw] p-4">
            <div className="w-full grid grid-cols-3 py-4">
              <div className="flex gap-4"></div>
              <div className="flex items-center justify-center">
                <input
                  type="text"
                  value={search}
                  onChange={(e)=>{
                    setSearch(e.target.value);
                  }}
                  placeholder="search tên sản phẩm...."
                  className="h-full w-[250px] border-[2px] border-gray-200 rounded-xl outline-none p-2 "
                />
              </div>
              <div className="flex items-center justify-end">
                <button
                  type="button"
                  className="h-full py-2 px-6 bg-green-600 flex justify-center items-center text-white"
                  onClick={() => {
                    setModal(true);
                    setModalStatus("Add");
                  }}
                >
                  <box-icon name="plus" color="#ffffff"></box-icon>
                  Add
                </button>
              </div>
            </div>

            <div className="w-full max-w-[80vw]  font-sans overflow-hidden">
              <div className="w-full ">
                <div className="w-full grid grid-cols-6">
                  <div className="bg-gray-300 text-gray-600 uppercase text-sm leading-normal text-center font-bold py-3 ">
                    STT
                  </div>
                  <div className="bg-gray-300 text-gray-600 uppercase text-sm leading-normal text-center font-bold py-3">
                    Tên Sản Phẩm
                  </div>
                  <div className="bg-gray-300 text-gray-600 uppercase text-sm leading-normal text-center font-bold py-3">
                    Giá Bán (VND)
                  </div>

                  <div className="bg-gray-300 text-gray-600 uppercase text-sm leading-normal text-center font-bold py-3">
                    Giá Nhập (VND)
                  </div>
                  <div className="bg-gray-300 text-gray-600 uppercase text-sm leading-normal text-center font-bold py-3">
                    Số Lượng Còn Lại
                  </div>
                  <div className="bg-gray-300 text-gray-600 uppercase text-sm leading-normal text-center font-bold py-3"></div>
                </div>
                <div className="w-full max-h-[65vh] overflow-y-auto">
                  {productData?.filter((item)=>{
                      return item.TenSanPham.toLowerCase().includes(search?.toLowerCase()) 
                  })?.map((item,index) => {
                    return (
                      <div
                        key={item.IdSanPham}
                        className="w-full grid grid-cols-6 h-[70px] border-b border-gray-200 hover:bg-gray-100"
                      >
                        <div className=" items-center py-3 px-2 text-center flex justify-center">
                          {index}
                        </div>
                        <div className=" items-center py-3 px-2 text-center flex justify-center ">
                          {item.TenSanPham}
                        </div>
                        <div className=" py-3 px-2 text-center flex items-center justify-center">
                          {item.GiaBan.toLocaleString()} 
                        </div>

                        <div className=" py-3 px-2 text-center flex items-center justify-center">
                          {item.GiaNhap.toLocaleString()} 
                        </div>

                        {!item.SoLuongNhap && (
                          <div className=" py-3 px-2 text-center flex items-center justify-center">
                            0
                          </div>
                        )}
                        {item.SoLuongNhap && !item.SoLuongDaBan && (
                          <div className=" py-3 px-2 text-center flex items-center justify-center">
                            {item.SoLuongNhap.SoLuongNhap}
                          </div>
                        )}
                        {item.SoLuongNhap && item.SoLuongDaBan && (
                          <div className=" py-3 px-2 text-center flex items-center justify-center">
                            {item.SoLuongNhap.SoLuongNhap - item.SoLuongDaBan.SoLuongDaBan}
                          </div>
                        )}
                        <div className=" py-3 px-2 text-center flex items-center justify-center">
                          <div
                            onClick={() => {
                              setIdProductModal(item.IdSanPham);
                              setModal(true);
                              setModalStatus("Edit");
                            }}
                            className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                              />
                            </svg>
                          </div>
                          <div
                          onClick={() => {
                            setIdProductModal(item.IdSanPham);
                            setModalStatus("Remove");
                            setModal(true);
                          }}
                          class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {modal && (
            <ProductModal
              status={modalStatus}
              id={idProductModal}
              handleModal={handleModal}
            />
          )}
        </>
      ) : (
        <div className=" "></div>
      )}
    </>
  );
};

export default AdminProducts;
