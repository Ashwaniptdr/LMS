export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-3 bg-white border-b shadow-sm">
      <h2 className="text-lg font-semibold">User Dashboard</h2>
      <button
        onClick={() => alert("Logging out...")}
        className="bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-600"
      >
        Logout
      </button>
    </header>
  );
}
