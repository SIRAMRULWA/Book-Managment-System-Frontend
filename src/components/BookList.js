import React from 'react';

const BookList = ({ books }) => {
  return (
    <div className="book-list">
      <h2>Books</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {books && books.length ? (
            books.map((book) => (
              <tr key={book.id}>
                <td>{book.title || ''}</td>
                <td>{book.author || ''}</td>
                <td>{book.description || ''}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No books available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BookList;
