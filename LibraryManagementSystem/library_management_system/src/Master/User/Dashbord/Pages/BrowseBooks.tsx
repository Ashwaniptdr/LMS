import BookCard from "../Component/BookCard";

export default function BrowseBooks() {
  const books = [
    { title: "Clean Code", author: "Robert C. Martin", category: "Programming" },
    { title: "Atomic Habits", author: "James Clear", category: "Self-help" },
  ];

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Browse Books</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {books.map((book, index) => (
          <BookCard
            key={index}
            title={book.title}
            author={book.author}
            category={book.category}
            onCheckout={() => alert(`Checkout: ${book.title}`)}
          />
        ))}
      </div>
    </div>
  );
}
