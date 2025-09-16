
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Auth from './Auth'

import HomePage from './Home/Pages/Home'

import UserDashboard from './Master/User'
import EmployeeDashboard from './Master/Employee'




function App() {
  return (
    <>
     <nav>
      {/* <Link to={"/auth/user/Register"}>Register</Link>
      <Link to={"/auth/user/Login"}>Login</Link>
      <Link to={"/auth/employee/Register"}>Register</Link>
      <Link to={"/auth/employee/Login"}>Login</Link> */}
      <Link to={"/home/pages/Homepage"}>Home</Link>
       {/* <Link to="/userdashboard/home">User Dashboard</Link> */}

      


     </nav>
     <div>
      <Routes>
        <Route path='/home/*' element={<HomePage/>} />
       <Route path="/auth/*" element={<Auth/>} />
       <Route path="/userdashboard/*" element={<UserDashboard />} />    
       <Route path="/employeedashboard/*" element={<EmployeeDashboard />} />    

      </Routes>
     </div>
    </>
  )
}

export default App





