import { useState, useEffect } from 'react';

export default function BookForm({ onSubmit, bookToEdit }) {
  const [book, setBook] = useState({ title: '', author: '' });

  useEffect(() => {
    if (bookToEdit) setBook(bookToEdit);
  }, [bookToEdit]);

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(book);
    setBook({ title: '', author: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        name="title"
        value={book.title}
        onChange={handleChange}
        placeholder="Título"
        className="border p-2 mr-2"
        required
      />
      <input
        name="autor"
        value={book.author}
        onChange={handleChange}
        placeholder="Autor"
        className="border p-2 mr-2"
        required
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">
        {bookToEdit ? 'Actualizar' : 'Agregar'}
      </button>
    </form>
  );
}
