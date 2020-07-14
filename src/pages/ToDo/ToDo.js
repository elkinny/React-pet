import React, { useEffect } from 'react';
import { connect } from 'react-redux'

import { AddToDo, ToDoList } from 'components/ToDo';
import { getTodos, postToDo, deleteToDo, toggleToDo } from 'store/actionCreators';

const ToDo = ({
  toDoItems = [],
  getTodos,
  postToDo,
  deleteToDo,
  toggleToDo
}) => {
  useEffect(() => getTodos(), [getTodos]);

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

const mapDispatchToProps = { getTodos, postToDo, deleteToDo, toggleToDo };
const mapStateToProps = state => ({
  toDoItems: state.toDoItems,
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);
