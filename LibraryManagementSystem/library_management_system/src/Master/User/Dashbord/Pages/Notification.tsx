export default function Notifications() {
  const notifications = [
    { msg: "Your book 'Clean Code' is due in 2 days.", type: "warning" },
    { msg: "Your book 'Atomic Habits' is overdue!", type: "danger" },
  ];

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Notifications</h1>
      <ul>
        {notifications.map((n, i) => (
          <li
            key={i}
            className={`p-2 mb-2 rounded ${
              n.type === "danger"
                ? "bg-red-100 text-red-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
          >
            {n.msg}
          </li>
        ))}
      </ul>
    </div>
  );
}
