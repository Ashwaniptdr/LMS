import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Auth from './Auth'
import HomePage from './Home/Pages/Home'
import UserDashboard from './Master/User'
import EmployeeDashboard from './Master/Employee/Dashboard/Pages/EmployeeDashboard' // ✅

function App() {
  return (
    <>
      <nav>
        <Link to={"/home/pages/Homepage"}>Home</Link>
        {/* <Link to="/employeedashboard">Employee Dashboard</Link> ✅ */}
      </nav>
      <div>
        <Routes>
          
          <Route path='/home/*' element={<HomePage />} />
          <Route path="/auth/*" element={<Auth />} />
          <Route path="/userdashboard/*" element={<UserDashboard />} />
          <Route path="/employeedashboard" element={<EmployeeDashboard />} /> {/* ✅ */}
        </Routes>
      </div>
    </>
  )
}

export default App;
