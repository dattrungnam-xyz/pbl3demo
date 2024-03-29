import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom';

import { useSelector } from 'react-redux';

import {Home, Login,Register,Admin,Staff,Service,Booking,User,UserBookingInfor, RateService, Rate,EditBooking, ChangePassword} from './pages';


function App() {
  const user = useSelector((state)=> state.auth.login.currentUser)
  return (
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<Home/>}/>
      {/* <Route path="/Login" element={user ? <Navigate to="/" replace/> : <Login/> }/> */}
      <Route path="/Login" element={ <Login/> }/>
      <Route path="/Rateservice/:id" element={ <RateService/> }/>
      <Route path="/Register" element={<Register/>}/>
      <Route path="/Admin" element={<Admin/>}/>
      <Route path="/User/:id" element={<User/>}/>
      <Route path="/Staff" element={<Staff/>}/>
      <Route path="/Service" element={<Service/>}/>
      <Route path="/Booking" element={<Booking/>}/>
      <Route path="/BookingInfor/:id" element={<UserBookingInfor/>}/>
      <Route path="/Rate" element={<Rate/>}/>
      <Route path="/EditBooking/:id" element={<EditBooking/>}/>
      <Route path="/ChangePassWord/:id" element={<ChangePassword/>}/>
      
    </Routes>

     </BrowserRouter>
  );
}

export default App;
