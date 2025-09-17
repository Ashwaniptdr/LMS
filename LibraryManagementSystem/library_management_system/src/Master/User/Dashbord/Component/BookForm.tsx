// // components/BookForm.tsx

// import React, { useState } from "react";
// import type { Book } from "../services/Book";
// import Card from "../../../../Shared/Component/Common/Card";

// interface Props {
//   book?: Book;
//   onSave: (bookData: Omit<Book, "id">, id?: number) => void;
//   onCancel: () => void;
// }

// const BookForm: React.FC<Props> = ({ book, onSave, onCancel }) => {
//   const [name, setName] = useState(book?.name || "");
//   const [author, setAuthor] = useState(book?.author || "");
//   const [publisher, setPublisher] = useState(book?.publisher || "");
//   const [edition, setEdition] = useState(book?.edition || "");
//   const [category, setCategory] = useState(book?.category || "");
//   const [price, setPrice] = useState<number>(book?.price || 0);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     onSave({ name, author, publisher, edition, category, price }, book?.id);
//   };

//   return (
//     <>
//     <Card title={"Add new Book"}>
//     <div>
      
//       <h2>{book ? "Edit Book" : "Add New Book"}</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name:</label>
//           <input value={name} onChange={e => setName(e.target.value)} required />
//         </div>
//         <div>
//           <label>Author:</label>
//           <input value={author} onChange={e => setAuthor(e.target.value)} required />
//         </div>
//         <div>
//           <label>Publisher:</label>
//           <input value={publisher} onChange={e => setPublisher(e.target.value)} required />
//         </div>
//         <div>
//           <label>Edition:</label>
//           <input value={edition} onChange={e => setEdition(e.target.value)} required />
//         </div>
//         <div>
//           <label>Category:</label>
//           <input value={category} onChange={e => setCategory(e.target.value)} required />
//         </div>
//         <div>
//           <label>Price:</label>
//           <input
//             type="number"
//             value={price}
//             onChange={e => setPrice(parseFloat(e.target.value))}
//             required
//           />
//         </div>
//         <button type="submit">{book ? "Update" : "Create"}</button>
//         <button type="button" onClick={onCancel} style={{ marginLeft: "10px" }}>Cancel</button>
//       </form>
//     </div>
//     </Card>
//     </>
//   );
// };

// export default BookForm;
