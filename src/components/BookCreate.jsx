import React, { useState } from "react";

const BookCreate = ({ onCreate }) => {
  const [title, setTitle] = useState("");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(title);
    setTitle("");
  };
  return (
    <div>
      <form className="book-create" onSubmit={handleSubmit}>
        <h3>Add a book</h3>
        <label>Title</label>
        <input className="input" type="text" value={title} onChange={handleChange} />
        <button className="button">Create!</button>
      </form>
    </div>
  );
};

export default BookCreate;
