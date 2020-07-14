import React from 'react';

import './styles.css';
import ToDoItem from '../ToDoItem/ToDoItem';

const ToDoList = ({toDoItems, toggleToDo, deleteToDo}) => {
  const createList = () => {
    return toDoItems.map(toDoItem => (
      <ToDoItem
        id={toDoItem.id}
        key={toDoItem.id}
        toDoItem={toDoItem}
        toggleToDo={toggleToDo}
        deleteToDo={deleteToDo}
      />
    ));
  }

  return <ul className="to-do__list">{createList()}</ul>;
}

export default ToDoList;
