import { Route, Routes } from "react-router-dom"
import Dashboard from "./Dashbord"



function UserDashboard() {
  return (
    <>
    <Routes>
      <Route path="dashbord/*" element={< Dashboard/>} />
    </Routes>
    </>
  )
}

export default UserDashboard