export default function BookItem({ book, onEdit, onDelete }) {
    return (
      <li className="flex justify-between items-center border-b py-2">
        <span>{book.title} - {book.author}</span>
        <div>
          <button onClick={onEdit} className="text-yellow-500 mr-2">Editar</button>
          <button onClick={onDelete} className="text-red-500">Eliminar</button>
        </div>
      </li>
    );
  }
  