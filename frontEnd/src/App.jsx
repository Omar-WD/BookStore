import React from 'react';
import './App.css';
import BookList from './components/bookList';
import HeadNav from './components/HeadNav';
import AddBookForm from './components/AddBookForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookDetails from './components/bookDetail';
import Home from './components/Home';


const App = () => {
  return (
    
    <Router>
      <div className="NavLinks">
      <HeadNav/>
        
      </div>
      <Routes className="RoutesSection">
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/books/:id" element={<BookDetails />} />
        <Route path="/add-book" element={<AddBookForm />} />
      </Routes>
    </Router>
  );
};

export default App;