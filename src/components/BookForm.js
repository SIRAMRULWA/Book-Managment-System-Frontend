import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';

const ADD_BOOK = gql`
  mutation AddBook($title: String!, $author: String!, $description: String!) {
    addBook(title: $title, author: $author, description: $description) {
      id
      title
      author
      description
    }
  }
`;

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState({});

  const [addBook] = useMutation(ADD_BOOK);

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!title.trim()) {
      errors.title = 'Title is required';
    }
    if (!author.trim()) {
      errors.author = 'Author is required';
    }
    if (!description.trim()) {
      errors.description = 'Description is required';
    }

    if (Object.keys(errors).length === 0) {
      addBook({ variables: { title, author, description } })
        .then(() => {
          setTitle('');
          setAuthor('');
          setDescription('');
          alert('Book added successfully!');
        })
        .catch(error => {
          alert('Error adding book: ' + error.message);
        });
    } else {
      setErrors(errors);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Add Book</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title:</label>
          <input
            type="text"
            id="title"
            className={`form-control ${errors.title && 'is-invalid'}`}
            placeholder="Enter book title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && <div className="invalid-feedback">{errors.title}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="author" className="form-label">Author:</label>
          <input
            type="text"
            id="author"
            className={`form-control ${errors.author && 'is-invalid'}`}
            placeholder="Enter author's name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          {errors.author && <div className="invalid-feedback">{errors.author}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description:</label>
          <textarea
            id="description"
            className={`form-control ${errors.description && 'is-invalid'}`}
            placeholder="Write a brief description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          {errors.description && <div className="invalid-feedback">{errors.description}</div>}
        </div>
        <button type="submit" className="btn btn-info">Add Book</button>
      </form>
    </div>
  );
};

export default BookForm;
