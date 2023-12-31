import React from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import { useState } from "react";
const App = () => {
  const [books, setBooks] = useState([]);
  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if(book.id === id){
      return { ...books, title:newTitle};
      }
      return book;
    })
    setBooks(updatedBooks);
  }
  const deleteBookById = (id) =>{
    const updatedBooks = books.filter((book) =>{
      return book.id !== id;
    })
    setBooks(updatedBooks)
  }
  const createBook = (title) => {
    const updateBook = [...books, { id: 123, title }];
    setBooks(updateBook);
  };
  return (
    <>
      <div className="app">
        <BookList books={books} onDelete ={deleteBookById}/>
        <BookCreate onCreate={createBook} />
      </div>
    </>
  );
};

export default App;
