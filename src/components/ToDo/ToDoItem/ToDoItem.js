import React from 'react';

import './styles.css';

const ToDoItem = ({toDoItem, toggleToDo, deleteToDo}) => {
  const { id, title, completed } = toDoItem;

  const toggleItem = () => {
    toggleToDo(id);
  };

  const deleteItem = () => {
    deleteToDo(id);
  };

  return (
    <li>
      <label htmlFor={id}>
        <input
          type="checkbox"
          id={id}
          checked={completed}
          onChange={toggleItem}
        />
        <i />
        <span>{title}</span>
        <button onClick={deleteItem}>–</button>
      </label>
    </li>
  );
}

export default ToDoItem;
