import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./Dashbord/Component/Sidebar";
import Header from "./Dashbord/Component/Header";
import Home from "./Dashbord/Pages/Home";
import BrowseBooks from "./Dashbord/Pages/BrowseBooks";
import MyBooks from "./Dashbord/Pages/Mybook";
import Notifications from "./Dashbord/Pages/Notification";
import Profile from "./Dashbord/Pages/Profile";

export default function UserDashboard() {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <Header />
          <main className="p-4 overflow-y-auto flex-1 bg-gray-50">
            <Routes>
              <Route path="/" element={<Navigate to="/user/home" />} />
              <Route path="/user/home" element={<Home />} />
              <Route path="/user/browse" element={<BrowseBooks />} />
              <Route path="/user/mybooks" element={<MyBooks />} />
              <Route path="/user/notifications" element={<Notifications />} />
              <Route path="/user/profile" element={<Profile />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}
