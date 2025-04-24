import BookItem from './BookItem';

export default function BookList({ books, onEdit, onDelete }) {
  return (
    <ul>
      {books.map((book) => (
        <BookItem
          key={book.id}
          book={book}
          onEdit={() => onEdit(book)}
          onDelete={() => onDelete(book.id)}
        />
      ))}
    </ul>
  );
}
