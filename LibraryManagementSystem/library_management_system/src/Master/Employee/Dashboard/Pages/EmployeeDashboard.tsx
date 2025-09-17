

import React, { useState } from "react";
import BookList from "../Component/BookList";
import BookForm from "../Component/BookForm";
import bookService from "../services/bookService";
import type { Book } from "../services/Book";



const EmployeeDashboard: React.FC = () => {
  const [editingBook, setEditingBook] = useState<Book | undefined>(undefined);
  const [showForm, setShowForm] = useState(false);

  const handleEdit = (book: Book) => {
    setEditingBook(book);
    setShowForm(true);
  };

  const handleSave = async (bookData: Omit<Book, "id">, id?: number) => {
    if (id !== undefined) {
      const res = await bookService.update(id, bookData);
      if (res !== undefined) {
        alert("Book updated successfully");
      }
    } else {
      const res = await bookService.create(bookData);
      if (res !== undefined) {
        alert("Book added successfully");
      }
    }
    setShowForm(false);
    setEditingBook(undefined);
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingBook(undefined);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>📚 Employee Book Management Dashboard</h1>
      <button onClick={() => { setShowForm(true); setEditingBook(undefined); }}>
        ➕ Add New Book
      </button>
      {showForm && (
        <BookForm book={editingBook} onSave={handleSave} onCancel={handleCancel} />
      )}
      <BookList onEdit={handleEdit} />
    </div>
  );
};

export default EmployeeDashboard;
