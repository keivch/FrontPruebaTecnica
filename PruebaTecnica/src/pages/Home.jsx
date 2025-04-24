import { useEffect, useState } from 'react';
import BookForm from '../components/BookForm';
import BookList from '../components/BooksList';
import { getBooks, createBook, updateBook, deleteBook } from '../services/bookService';

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
    <div className="max-w-xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Gestión de Libros</h1>
      <BookForm onSubmit={handleAddOrEdit} bookToEdit={editingBook} />
      <BookList books={books} onEdit={setEditingBook} onDelete={handleDelete} />
    </div>
  );
}
