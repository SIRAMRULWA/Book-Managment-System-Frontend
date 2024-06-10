import React from 'react';

const BookList = ({ books }) => {
  return (
    <div className="container py-4">
      <h2 className="mb-4">Books</h2>
      <div className="table-responsive">
        <table className="table table-striped">
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
                  <td>{book.title || 'N/A'}</td>
                  <td>{book.author || 'N/A'}</td>
                  <td>{book.description || 'N/A'}</td>
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
    </div>
  );
};

export default BookList;
