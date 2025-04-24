import './Booklist.css';

export default function BookList({ books, onEdit, onDelete }) {
  if (!Array.isArray(books)) return <p>No hay libros disponibles.</p>;

  return (
    <div className="book-list">
      {books.map((book) => (
        <div key={book.id} className="book-item">
          <div className="book-info">
            <h3>{book.title}</h3>
            <p>{book.author}</p>
          </div>
          <div className="book-buttons">
            <button onClick={() => onEdit(book)}>Editar</button>
            <button onClick={() => onDelete(book.id)}>Eliminar</button>
          </div>
        </div>
      ))}
    </div>
  );
}
