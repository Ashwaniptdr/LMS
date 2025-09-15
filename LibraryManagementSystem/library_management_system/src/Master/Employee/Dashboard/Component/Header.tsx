export default function Header() {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-lg font-semibold">Employee Dashboard</h1>
      <button className="px-4 py-2 bg-red-600 text-white rounded">Logout</button>
    </header>
  );
}
