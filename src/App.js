import {BrowserRouter,Routes,Route} from 'react-router-dom';

import {Home, Login,Register,Admin,Staff,Service,Booking} from './pages';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Login" element={<Login/>}/>
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
