import React, { useEffect, useState } from "react";
import { getData } from "../../utils/fetchApi";
import { useSelector } from "react-redux";
import ServiceModal from "./ServiceModal";

const AdminService = () => {
  const [serviceData, setServiceData] = useState();
  const [modal,setModal] = useState(false);
  const [modalStatus,setModalStatus] = useState();
  const [idServiceModal,setIdServiceModal] = useState(0);
  const [filter,setFilter] = useState();


  const user = useSelector((state) => state.auth.login.currentUser);
  useEffect(() => {
    user &&
      getData("http://localhost:8080/v1/service").then((res) => {
        setServiceData(res.filter((item)=>{
          if(filter ) return item.LoaiDichVu === filter;
          else{
            return item
          }
        }));
        console.log(res);
      });
  }, [modal,filter]);

  const handleModal= () =>{
    setModal(false);
    setIdServiceModal(0)
    setModalStatus()
  }
  return (
    <>
      {serviceData ? (<>
        <section className="flex flex-col w-full max-w-[80vw] p-4">
          <div className="w-full grid grid-cols-3 py-4">
            <div className="flex gap-4"> 
            <button
            onClick={()=>{
              setFilter()
            }}
                type="button"
                className="h-full py-2 px-4 bg-gray-400 flex justify-center items-center text-white"
              >
                
                All
              </button>
            <button
            onClick={()=>{
              setFilter(1)
            }}
                type="button"
                className="h-full py-2 px-2 bg-gray-400 flex justify-center items-center text-white"
              >
                
                Dịch vụ chính
              </button>
              <button
              onClick={()=>{
                setFilter(2)
              }}
                type="button"
                className="h-full py-2 px-2 bg-gray-400 flex justify-center items-center text-white"
              >
                
                Dịch vụ phụ
              </button></div>
            <div className="flex items-center justify-center">
              <input
                type="text"
                placeholder="search...."
                className="h-full w-[250px] border-[2px] border-gray-200 rounded-xl outline-none p-2 "
              />
            </div>
            <div className="flex items-center justify-end">
              <button
                type="button"
                className="h-full py-2 px-6 bg-green-600 flex justify-center items-center text-white"
                onClick={()=>{
                  setModal(true)
                  setModalStatus("Add")
                }}
              >
                <box-icon name="plus" color="#ffffff"></box-icon>
                Add
              </button>
            </div>
          </div>

          <div className="w-full max-w-[80vw]  font-sans overflow-hidden">
            <div className="w-full ">
              <div className="w-full grid grid-cols-5">
                <div className="bg-gray-300 text-gray-600 uppercase text-sm leading-normal text-center font-bold py-3 ">
                  ID
                </div>
                <div className="bg-gray-300 text-gray-600 uppercase text-sm leading-normal text-center font-bold py-3">
                  Tên Dịch Vụ
                </div>
                <div className="bg-gray-300 text-gray-600 uppercase text-sm leading-normal text-center font-bold py-3">
                  Giá Tiền
                </div>

                <div className="bg-gray-300 text-gray-600 uppercase text-sm leading-normal text-center font-bold py-3">
                  Loại Dịch Vụ
                </div>
                <div className="bg-gray-300 text-gray-600 uppercase text-sm leading-normal text-center font-bold py-3"></div>
              </div>
              <div className="w-full max-h-[65vh] overflow-y-auto">
                {serviceData?.map((item) => {
                  return (
                    <div
                      key={item.IdDichVu}
                      className="w-full grid grid-cols-5 h-[70px] border-b border-gray-200 hover:bg-gray-100"
                    >
                      <div className=" items-center py-3 px-2 text-center flex justify-center">
                        {item.IdDichVu}
                      </div>
                      <div className=" items-center py-3 px-2 text-center flex justify-center ">
                        {item.TenDichVu}
                      </div>
                      <div className=" py-3 px-2 text-center flex items-center justify-center">
                        {item.GiaTien}
                      </div>

                      <div className=" py-3 px-2 text-center flex items-center justify-center">
                        {item.LoaiDichVu === 1
                          ? "Dịch vụ chính"
                          : "Dịch vụ phụ"}
                      </div>
                      <div className=" py-3 px-2 text-center flex items-center justify-center">
                        <div onClick={()=>{
                          setIdServiceModal(item.IdDichVu)
                          setModal(true)
                          setModalStatus("View")
                        }} className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
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
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                        </div>
                        <div onClick={()=>{
                          setIdServiceModal(item.IdDichVu)
                          setModal(true)
                          setModalStatus("Edit")
                        }} className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
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
                       
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
                    
        {modal && <ServiceModal status={modalStatus} id={idServiceModal} handleModal={handleModal} />}
        </>
      ) : (
        <div className=" ">
          
        </div>
      )}
    </>
  );
};

export default AdminService;
