import React, { useState } from 'react'

const BookEdit = ( {book}) => {
  const [title, setTitle] = useState(book.title);
  const handleChange = (event) =>{
    setTitle(event.target.value);
  }
  const handleSubmitChange = (e) => {
    e.preventDefault();
    console.log("new title" , title);
  }
  return (
    <form onSubmit={handleSubmitChange} className='book-edit'>
      <label>Title</label>
      <input type="text" className='input' value={title} onChange={handleChange}/>
      <button className="button is-primary">
        Save
      </button>
    </form>
  )
}

export default BookEdit