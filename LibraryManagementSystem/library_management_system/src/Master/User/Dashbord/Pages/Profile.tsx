export default function Profile() {
  return (
    <div>
      <h1 className="text-xl font-bold mb-4">My Profile</h1>
      <form className="space-y-4 max-w-md">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input type="text" className="w-full border p-2 rounded" defaultValue="John Doe" />
        </div>
        <div>
          <label className="block text-sm font-medium">Phone</label>
          <input type="text" className="w-full border p-2 rounded" defaultValue="9876543210" />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input type="email" className="w-full border p-2 rounded" defaultValue="john@example.com" disabled />
        </div>
        <div>
          <label className="block text-sm font-medium">Password</label>
          <input type="password" className="w-full border p-2 rounded" placeholder="••••••••" />
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Save</button>
      </form>
    </div>
  );
}
