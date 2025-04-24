import { useEffect, useState } from "react";
import BookForm from "../components/BookForm";
import BookList from "../components/BooksList";
import {
  getBooks,
  createBook,
  updateBook,
  deleteBook,
} from "../services/bookService";
import "./Home.css";

export default function Home() {
  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null);

  const fetchBooks = async () => {
    const res = await getBooks();
    setBooks(res.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleAddOrEdit = async (book) => {
    if (editingBook) {
      await updateBook(editingBook.id, book);
      setEditingBook(null);
    } else {
      await createBook(book);
    }
    fetchBooks();
  };

  const handleDelete = async (id) => {
    await deleteBook(id);
    fetchBooks();
  };

  return (
    <div className="home-container">
      <h1 className="home-title">Gestión de Libros</h1>
      <BookForm onSubmit={handleAddOrEdit} bookToEdit={editingBook} />
      <div className="spacer" />
      <BookList books={books} onEdit={setEditingBook} onDelete={handleDelete} />
    </div>
  );
}
