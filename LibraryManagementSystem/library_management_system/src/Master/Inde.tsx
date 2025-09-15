
import { Route, Routes } from "react-router-dom";
import UserDashboard from "./User"; // ✅ make sure ./User/index.tsx exists

function Master() {
  return (
    <div>
      <Routes>
        {/* User Dashboard */}
        <Route path="userdashboard/*" element={<UserDashboard />} />
      </Routes>
    </div>
  );
}

export default Master;
