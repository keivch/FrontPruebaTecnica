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
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        value={book.title}
        onChange={handleChange}
        placeholder="Título"
        className="form-input"
        required
      />
      <input
        name="author"
        value={book.author}
        onChange={handleChange}
        placeholder="Autor"
        className="form-input"
        required
      />
      <button type="submit" className="submit-btn">
        {bookToEdit ? 'Actualizar' : 'Agregar'}
      </button>
    </form>
  );
}

