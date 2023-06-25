import React, { useEffect, useState } from 'react';
import moment from 'moment';
import "../App.css"
import "./bookList.css"
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import BookDetails from "./bookDetail"


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

    const handleDelete = async (bookId) => {
      try {
        const response = await fetch(`http://localhost:4000/api/books/${bookId}`, {
          method: 'DELETE',
        });
        if (response.ok) {
          // Book deleted successfully, update the book list
        setData((prevData) => prevData.filter((book) => book.id !== bookId));
        } else {
          console.log('Failed to delete book');
        }
      } catch (error) {
        console.log(error);
      }
    };
  
    return (
      <div className='BookListDiv'>

        <h1>Book List</h1>
        <ul>
          {data.map((book) => (
                 <Card key={book.id} style={{ width: '20%',margin:'5px',marginBottom:'30px' }} className='BookCard'>
                   <Card.Img variant="top" src={book.cover_url} className='CardImg' />
                   <Card.Body>
                     <Card.Title>{book.title}</Card.Title>
                     <Card.Text>{book.description}</Card.Text>
                     <div className='CardBtns'>
                        <Button variant="primary" style={{width:'50%', marginRight:"5px"}}>
                          <Link className="ShowMore" to={`/books/${book.id}`} style={{color:"white", marginRight:"5px"}}>
                            Read more
                          </Link>
                        </Button>
                        <Button onClick={() => handleDelete(book.id)} variant="danger" style={{color:"white", width:'50%'}}>
                          Delete Book
                        </Button>
                     </div>
                   </Card.Body>
                 </Card>
          ))}
        </ul>
      </div>

  );
}
   
  
  export default BookList;
  