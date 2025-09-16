import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./Dashboard/Component/Sidebar";
import Header from "./Dashboard/Component/Header";
import Home from "./Dashboard/pages/Home";
import ManageBooks from "./Dashboard/pages/ManageBooks";
import Manageusers from "./Dashboard/pages/ManageUsers";
import Circulation from "./Dashboard/pages/Circulation";
import Reports from "./Dashboard/pages/Reports";
import Profile from "./Dashboard/pages/Profile";

export default function EmployeeDashboard() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="p-4 overflow-y-auto flex-1 bg-gray-50">
          <Routes>
            <Route path="/" element={<Navigate to="home" replace />} />
            <Route path="home" element={<Home />} />
            <Route path="managebooks" element={<ManageBooks />} />
            <Route path="manageusers" element={<Manageusers />} />
            <Route path="circulation" element={<Circulation />} />
            <Route path="reports" element={<Reports />} />
            <Route path="profile" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
