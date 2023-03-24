import React,{useState} from 'react'
import { AdminNavbar, AdminSidebar,AdminContent, AdminEditInfor } from '../components'

const Admin = () => {
    const [login,setLogin] = useState(false);
  return (
    <>

        <AdminNavbar login={login} setLogin={setLogin}/>
        <section class="flex flex-row">
            <AdminSidebar/>
            {/* <AdminContent/> */}
            <AdminEditInfor/>
        </section>
    </>
  )
}

export default Admin