import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom';

import { useSelector } from 'react-redux';

import {Home, Login,Register,Admin,Staff,Service,Booking} from './pages';

function App() {
  const user = useSelector((state)=> state.auth.login.currentUser)
  return (
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<Home/>}/>
      <Route path="/Login" element={user ? <Navigate to="/" replace/>  : <Login/> }/>
      <Route path="/Register" element={<Register/>}/>
      <Route path="/Admin" element={<Admin/>}/>
      <Route path="/Staff" element={<Staff/>}/>
      <Route path="/Service" element={<Service/>}/>
      <Route path="/Booking" element={<Booking/>}/>
      
    </Routes>

     </BrowserRouter>
  );
}

export default App;
