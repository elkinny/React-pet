import React, { useState } from 'react';
import { connect } from 'react-redux'

import { postToDo } from 'store/thunks';
import './styles.scss';

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
    <form onSubmit={addToDo} className="add-todo">
      <input
        type="text"
        name="title"
        placeholder="Add to do item ..."
        value={title}
        onChange={handleInput}
        className="add-todo__input"
      />
      <input type="submit" value="Add" className="add-todo__submit"/>
    </form>
  );
}

const mapDispatchToProps = { postToDo };

export default connect(null, mapDispatchToProps)(AddToDo);
