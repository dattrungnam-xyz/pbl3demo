import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getDataOnlyAdmin } from "../../utils/fetchApi";
import ImportProductModal from "./ImportProductModal";
const AdminImport = () => {
  const user = useSelector((state) => state.auth.login.currentUser);

  const [modal, setModal] = useState(false);

  const [modalData, setModalData] = useState();

  const [modalStatus, setModalStatus] = useState();

  const [filter, setFilter] = useState();

  const [importProductData, setImportProductData] = useState([]);
  useEffect(() => {
    user.type === "admin" &&
      getDataOnlyAdmin("http://localhost:8080/v1/import/", user.token).then(
        (res) => {
         // console.log(res);
          setImportProductData(res);
        }
      );
  }, [modal]);
  return (
    <>
      <div className="flex flex-col w-full max-w-[80vw] p-4">
        <div className="w-full py-4 grid grid-cols-3">
          <div className="flex gap-4"></div>
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
              onClick={() => {
                setModalStatus("Add");
                setModal(true);
              }}
            >
              <box-icon name="plus" color="#ffffff"></box-icon>
              Add
            </button>
          </div>
        </div>

        <div className="w-full  font-sans overflow-hidden">
          <div className="w-full ">
            <div className="w-full grid grid-cols-3">
              <div className="bg-gray-300 text-gray-600 uppercase text-sm leading-normal text-center font-bold py-3 ">
                STT
              </div>
              <div className="bg-gray-300 text-gray-600 uppercase text-sm leading-normal text-center font-bold py-3">
                Ngày Nhập
              </div>

              <div className="bg-gray-300 text-gray-600 uppercase text-sm leading-normal text-center font-bold py-3"></div>
            </div>
            <div className="w-full max-h-[65vh] overflow-y-auto">
              {importProductData?.map((item,index) => {
                return (
                  <div
                    key={item.IdDonNhap}
                    className="w-full grid grid-cols-3 h-[70px] border-b border-gray-200 hover:bg-gray-100"
                  >
                    <div className=" items-center py-3 px-2 text-center flex justify-center">
                      {index}
                    </div>

                    <div className=" py-3 px-2 text-center flex items-center justify-center">
                      {item.NgayNhap.slice(0,10)}
                    </div>
                    <div className=" py-3 px-2 text-center flex items-center justify-center">
                      <div
                        onClick={() => {
                          setModalStatus("View");
                          setModalData(item)
                          setModal(true);
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
                      <div
                        onClick={() => {
                          setModalStatus("Edit");
                          setModalData(item)
                          setModal(true);
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
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      { modal && <ImportProductModal data= {modalData} status={modalStatus} setModal={setModal} /> }
    </>
  );
};

export default AdminImport;
