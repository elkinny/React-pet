import React from 'react';

import './styles.scss';

const ToDoItem = ({toDoItem, toggleToDo, deleteToDo}) => {
  const { id, title, completed } = toDoItem;

  const toggleItem = () => {
    toggleToDo(id);
  };

  const deleteItem = () => {
    deleteToDo(id);
  };

  return (
    <li className="todo-item__wrapper">
      <label htmlFor={id} className="todo-item">
        <input
          type="checkbox"
          id={id}
          checked={completed}
          onChange={toggleItem}
          className="todo-item__checkbox"
        />
        <i />
        <span className="todo-item__title">{title}</span>
        <button onClick={deleteItem} className="todo-item__remove-btn">
          <span className="todo-item__remove-btn-text">–</span>
        </button>
      </label>
    </li>
  );
}

export default ToDoItem;
