import React from 'react';
import { Link } from 'react-router-dom'; 
import { FaHome, FaBook, FaPlus } from 'react-icons/fa'; 
import './HeadNav.css';

const HeadNav = () => {
    return (
      <nav className="navbar">
        <div className="brand">My Book Application</div>
        <ul className="nav-links">
          <li>
            <Link to="/">
              <FaHome />
              Home
            </Link>
          </li>
          <li>
            <Link to="/books">
              <FaBook />
              Books
            </Link>
          </li>
          <li>
            <Link to="/add-book">
              <FaPlus />
              Add Book
            </Link>
          </li>
        </ul>
      </nav>

      
    );
  };
  export default HeadNav