import React from 'react'
import "./Home.css"
import BookList from "./bookList"


function Home() {
  return (
    <div>
      <div className='HeroSection'>
        <h6>COME AND JOIN THE READING CLUB</h6>
        <h1>Enjoy the silence</h1>
        <h1>in our reading room</h1>
      </div>
      <div className='HomeBookList'>
        <BookList/>
      </div>
      


    </div>
    
    
  )
}

export default Home