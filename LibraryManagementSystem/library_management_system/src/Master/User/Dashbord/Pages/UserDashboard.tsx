// pages/UserDashboard.tsx

import React, { useEffect, useState } from "react";
import bookService from "../Services/bookService";
import type { Book } from "../Services/Book";
import { DataGrid } from "../../../../Shared/Component/Grid";

const UserDashboard: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await bookService.getAll();
        setBooks(res);
      } catch (err) {
        alert("Failed to load books");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const columns = [
    { field: "id", header: "ID" },
    { field: "name", header: "Name" },
    { field: "author", header: "Author" },
    { field: "publisher", header: "Publisher" },
    { field: "edition", header: "Edition" },
    { field: "category", header: "Category" },
    { field: "price", header: "Price" },
  ];

  if (loading) return <div>Loading book list...</div>;

  return (
    <div style={{ padding: 20 }}>
      <h1>📚 User Dashboard</h1>
      {books.length === 0 ? (
        <div>No books available</div>
      ) : (
        <DataGrid data={books} columns={columns} />
      )}
    </div>
  );
};

export default UserDashboard;
