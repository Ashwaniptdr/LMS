
import { Route, Routes } from "react-router-dom";
import UserDashboard from "./User"; // ✅ make sure ./User/index.tsx exists
import EmployeeDashboard from "./Employee";

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
