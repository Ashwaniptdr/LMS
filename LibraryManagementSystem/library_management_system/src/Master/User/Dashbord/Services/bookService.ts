
import { get, post,del,put } from "../../../../Shared/Apis";
import type { Book } from "./Book";

const API = {
  getAll: () => get<Book[]>("books"),
  getById: (id: number) => get<Book>(`books/${id}`),
  create: (book: Omit<Book, "id">) => post<Book>("books", book),
  update: (id: number, book: Omit<Book, "id">) => put<Book>(`books/${id}`, book),
  del: (id: number) => del<Book>(`books/${id}`),
};

export default API;
