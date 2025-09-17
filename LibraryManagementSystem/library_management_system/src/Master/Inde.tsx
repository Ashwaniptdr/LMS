
import { Route, Routes } from "react-router-dom";

import EmployeeDashboard from "./Employee";
import UserDashboard from "./User/Dashbord/Pages/UserDashboard";

function Master() {
  return (
    <div>
      <Routes>
        <Route path="/employeedashboard/*" element={<EmployeeDashboard />} /> 
        <Route path="/userdashboard/*" element={<UserDashboard />} /> 
      </Routes>
    </div>
  );
}

export default Master;
