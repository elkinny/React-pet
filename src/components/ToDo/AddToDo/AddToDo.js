import React, { useState } from 'react';

import './styles.css';

const AddToDo = ({ postToDo }) => {
  const [title, setTitle] = useState('');

  const handleInput = e => {
    setTitle(e.target.value);
  };

  const addToDo = e => {
    e.preventDefault();
    if (title.length > 3) {
      postToDo(title);
      setTitle('');
    }
  };

  return (
    <form onSubmit={addToDo} className="addTodo">
      <input
        type="text"
        name="title"
        placeholder="Add to do item ..."
        value={title}
        onChange={handleInput}
      />
      <input type="submit" value="Add" />
    </form>
  );
}

export default AddToDo;
