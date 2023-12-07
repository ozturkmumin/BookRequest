import React from 'react'
import BookCreate from "./components/BookCreate"

import { useState } from 'react'
const App = () => {
  const [books , setBooks] = useState([]);
  const createBook = (title) =>{
    console.log("Need to add book with:" , title);
  }
  return (
    <>
      <BookCreate onCreate={createBook}/>
    </>
  )
}

export default App