import React, {useEffect} from 'react';
import { connect } from 'react-redux'

import './styles.scss';
import ToDoItem from '../ToDoItem/ToDoItem';
import { deleteToDo, toggleToDo, getTodos } from 'store/thunks';
import { toDoItemsSelector } from 'store/selectors'

const ToDoList = ({toDoItems, getTodos, toggleToDo, deleteToDo}) => {
  useEffect(() => getTodos(), [getTodos]);

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

  return <ul className="todo__list">{createList()}</ul>;
}

const mapStateToProps = state => ({
  toDoItems: toDoItemsSelector(state),
});
const mapDispatchToProps = { deleteToDo, toggleToDo, getTodos };

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);

