
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Auth from './Auth'

import HomePage from './Home/Pages/Home'




function App() {
  return (
    <>
     <nav>
      {/* <Link to={"/auth/user/Register"}>Register</Link>
      <Link to={"/auth/user/Login"}>Login</Link>
      <Link to={"/auth/employee/Register"}>Register</Link>
      <Link to={"/auth/employee/Login"}>Login</Link> */}
      <Link to={"/home/pages/Homepage"}>Home</Link>


     </nav>
     <div>
      <Routes>
        <Route path='/home/*' element={<HomePage/>} />
       <Route path="/auth/*" element={<Auth/>} />

      </Routes>
     </div>
    </>
  )
}

export default App
