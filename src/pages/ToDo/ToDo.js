import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { AddToDo, ToDoList } from 'components/ToDo';
import { generateId } from 'utils';

const ToDo = () => {
  const [toDoItems, setToDoItems] = useState([]);

  useEffect(() => {
    axios.get(process.env.REACT_APP_DB_LINK).then(res =>
      setToDoItems(res.data)
    )
  }, []);

  const toggleToDo = id => {
    const newToDoItems = toDoItems.map(toDoItem => {
      if (toDoItem.id === id) toDoItem.completed = !toDoItem.completed;
      return toDoItem;
    });

    setToDoItems(newToDoItems);
  };

  const deleteToDo = id => {
    const newToDos = toDoItems.filter(
      toDoItem => toDoItem.id !== id
    );

    axios
      .delete(`${process.env.REACT_APP_DB_LINK}/${id}`)
      .then(() => setToDoItems(newToDos))
      .catch(() => setToDoItems(newToDos));
  };

  const postToDo = title => {
    const newToDo = {
      id: generateId(),
      title,
      completed: false,
    };

    axios
      .post(process.env.REACT_APP_DB_LINK, newToDo)
      .then(res => {
        setToDoItems([...toDoItems, res.data]);
    });
  };

  return (
    <>
      <AddToDo postToDo={postToDo} />
      <ToDoList
        toDoItems={toDoItems}
        toggleToDo={toggleToDo}
        deleteToDo={deleteToDo}
      />
    </>
  );
}

export default ToDo;
