export default function BookItem({ book, onEdit, onDelete }) {
    return (
      <div className="book-item">
        <span>{book.title} - {book.author}</span>
        <div className="book-actions">
          <button onClick={onEdit}>Editar</button>
          <button onClick={onDelete} className="delete">Eliminar</button>
        </div>
      </div>
    );
  }
  