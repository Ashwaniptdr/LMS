import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  const links = [
    { to: "/user/home", label: "Home" },
    { to: "/user/browse", label: "Browse Books" },
    { to: "/user/mybooks", label: "My Books" },
    { to: "/user/notifications", label: "Notifications" },
    { to: "/user/profile", label: "Profile" },
  ];

  return (
    <aside className="w-64 bg-white border-r shadow-md flex flex-col">
      <h1 className="text-xl font-bold p-4 border-b">📚 Library</h1>
      <nav className="flex-1 p-2">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`block px-4 py-2 rounded-md mb-2 ${
              location.pathname === link.to
                ? "bg-blue-600 text-white"
                : "hover:bg-gray-200"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
