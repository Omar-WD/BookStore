import React, { useEffect, useState } from 'react';
import moment from 'moment';
import "../App.css"
import "./BookDetail.css"
import { useParams } from 'react-router-dom';


const BookDetails = () => {
    const [data, setData] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await fetch(`http://localhost:4000/api/books/${id}`);
              if (response.ok) {
                const jsonData = await response.json();
                setData(jsonData[0]);
              } else {
                console.log('Failed to fetch book');
              }
            } catch (error) {
              console.log(error);
            }
          };
       
        fetchData();
    }, [id]);

    return (
      <div className='BookDetDiv'>
        <img src={data.cover_url} alt="Book Cover" />
        <div className='BookDetail'>
          <h3>Book Title: {data.title}</h3>
          <p>Author: {data.author}</p>
          <p>Description: {data.description}</p>
          <p>Category: {data.category}</p>
          <p>Published At: {moment(data.publishedAt).format('YYYY-MM-DD')}</p>
          {data.isactive ? <p>Status: Active</p> : <p>Status: Not Active</p>}
          {/* {data.read ? <img src='https://th.bing.com/th/id/R.b627f8c4f732fbe9100e12b6e6632300?rik=zTMzSV23xOlpEA&pid=ImgRaw&r=0&w=50&h=50'></img>: <img src='https://th.bing.com/th/id/OIP.CY6Z8AVmnzCzllHIuErOTwHaId?w=50&h=50&c=7&r=0&o=5&pid=1.7'></img>} */}
        </div>
      </div>
    );
};

export default BookDetails;
