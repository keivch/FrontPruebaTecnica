export default function BookList({ books, onEdit, onDelete }) {
    return (
      <div>
        {books.map((book) => (
          <BookItem
            key={book.id}
            book={book}
            onEdit={() => onEdit(book)}
            onDelete={() => onDelete(book.id)}
          />
        ))}
      </div>
    );
  }
  