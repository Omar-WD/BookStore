import React, { useEffect, useState } from 'react';
import moment from 'moment';
import "../App.css"
import "./bookList.css"


const BookList = () => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:4000/api/books');
          const jsonData = await response.json();
          setData(jsonData);
        } catch (error) {
          console.log(error);
        }
      };
  
      fetchData();
    }, []);
  
    return (
      <div className='BookListDiv'>
        <h1>Book List</h1>
        <ul>
          {data.map((book) => (
            <li key={book.id} className='BookDiv'>
              <h3>Book Title: {book.title}</h3>
              <p>Author: {book.author}</p>
              <p>Description: {book.description}</p>
              <p>Category: {book.category}</p>
              <p>Published At: {moment(book.publishedAt).format('YYYY-MM-DD')}</p>
              {book.isactive ? <p>Status: Active</p> : <p>Status: NotActive</p>}
              {/* {book.read ? <img src='https://th.bing.com/th/id/R.b627f8c4f732fbe9100e12b6e6632300?rik=zTMzSV23xOlpEA&pid=ImgRaw&r=0&w=50&h=50'></img>: <img src='https://th.bing.com/th/id/OIP.CY6Z8AVmnzCzllHIuErOTwHaId?w=50&h=50&c=7&r=0&o=5&pid=1.7'></img>} */}
              <img src={book.cover_url} height="auto" width="30%" alt="Book Cover" />
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default BookList;
  