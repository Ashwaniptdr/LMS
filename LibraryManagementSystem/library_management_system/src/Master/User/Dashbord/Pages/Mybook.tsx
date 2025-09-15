export default function MyBooks() {
  const borrowed = [
    { title: "Clean Code", due: "2025-09-20", renews: 0 },
    { title: "Atomic Habits", due: "2025-09-25", renews: 1 },
  ];

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">My Borrowed Books</h1>
      <table className="w-full border border-gray-300 bg-white">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Book</th>
            <th className="p-2 border">Due Date</th>
            <th className="p-2 border">Renewals</th>
            <th className="p-2 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {borrowed.map((b, i) => (
            <tr key={i} className="text-center">
              <td className="p-2 border">{b.title}</td>
              <td className="p-2 border">{b.due}</td>
              <td className="p-2 border">{b.renews}</td>
              <td className="p-2 border">
                <button className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600">
                  Renew
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
