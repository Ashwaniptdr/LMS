import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./Dashbord/Component/Sidebar";
import Header from "./Dashbord/Component/Header";
import Home from "./Dashbord/Pages/Home";
import BrowseBooks from "./Dashbord/Pages/BrowseBooks";
import MyBooks from "./Dashbord/Pages/Mybook";
import Notifications from "./Dashbord/Pages/Notification";
import Profile from "./Dashbord/Pages/Profile";

export default function UserDashboard() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="p-4 overflow-y-auto flex-1 bg-gray-50">
          <Routes>
            <Route path="/" element={<Navigate to="home" replace />} />
            <Route path="home" element={<Home />} />
            <Route path="browse" element={<BrowseBooks />} />
            <Route path="mybooks" element={<MyBooks />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="profile" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
