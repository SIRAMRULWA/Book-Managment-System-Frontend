import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import Navigation from './components/Navigation';

function WelcomePage() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-primary text-white">
      <div className="text-center">
        <h1 className="display-4 mb-4">Welcome to Our Library</h1>
        <p className="lead mb-5">Explore our collection of books</p>
        <div className="decorative-divider mb-5"></div>
        <div className="d-flex justify-content-center align-items-center mb-4">
          <div className="me-4">
            <span className="fs-1">📚</span>
          </div>
          <div>
            <span className="fs-1">🔍</span>
          </div>
        </div>
        <p>Feel free to wander and discover!</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<WelcomePage />} />
          <Route path="/books" element={<BookList />} />
          <Route path="/add" element={<BookForm />} />
          <Route path="/edit/:id" element={<BookForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
