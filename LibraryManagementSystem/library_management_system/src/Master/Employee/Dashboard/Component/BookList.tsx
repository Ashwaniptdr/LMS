import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";  // <-- import useNavigate
import bookService from "../services/bookService";
import type { Book } from "../services/Book";
import { DataGrid } from "../../../../Shared/Component/Grid";

const BookList: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();  // <-- initialize navigate

  const fetchBooks = async () => {
    setLoading(true);
    const res = await bookService.getAll();
    if (res) {
      setBooks(res);
    } else {
      alert("Error fetching books");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleDelete = async (id: number) => {
    const ok = window.confirm("Are you sure you want to delete this book?");
    if (!ok) return;

    const res = await bookService.del(id);
    if (res !== undefined) {
      fetchBooks(); // refresh after delete
    } else {
      alert("Delete failed");
    }
  };

  // New edit handler which navigates to the edit page
  const handleEdit = (book: Book) => {
    navigate(`/books/edit/${book.id}`);  // Adjust this route as per your routing config
  };

  if (loading) return <div>Loading...</div>;

  const columns = [
    { field: "id", header: "ID" },
    { field: "name", header: "Name" },
    { field: "author", header: "Author" },
    { field: "publisher", header: "Publisher" },
    { field: "edition", header: "Edition" },
    { field: "category", header: "Category" },
    { field: "price", header: "Price" },
    { caption: "Edit", onClick: handleEdit },
    { caption: "Delete", onClick: (b: Book) => handleDelete(b.id) },
  ];

  return (
    <div>
      <h2>Book List</h2>
      <DataGrid data={books} columns={columns} />
    </div>
  );
};

export default BookList;
