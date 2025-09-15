import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 text-white flex flex-col p-4">
      <h2 className="text-xl font-bold mb-6">📚 Library Admin</h2>
      <nav className="flex flex-col gap-3">
        <Link to="/employeedashboard/home" className="hover:text-yellow-300">Dashboard</Link>
        <Link to="/employeedashboard/managebooks" className="hover:text-yellow-300">Manage Books</Link>
        <Link to="/employeedashboard/manageusers" className="hover:text-yellow-300">Manage Users</Link>
        <Link to="/employeedashboard/circulation" className="hover:text-yellow-300">Circulation</Link>
        <Link to="/employeedashboard/reports" className="hover:text-yellow-300">Reports</Link>
        <Link to="/employeedashboard/profile" className="hover:text-yellow-300">Profile</Link>
      </nav>
    </div>
  );
}
