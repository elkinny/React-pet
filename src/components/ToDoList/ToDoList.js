import React, { Component } from 'react';
import './ToDoList.css';
import ToDoItem from '../ToDoItem/ToDoItem';
import PropTypes from 'prop-types'


class ToDoList extends Component {
  createList(){
    return this.props.toDoItems.map((toDoItem) => (
      <ToDoItem
        id = { toDoItem.id }
        key = { toDoItem.id }
        toDoItem = { toDoItem }
        toggleToDo = { this.props.toggleToDo }
      />
    ))
  }

  render() {
    return(
      <div className="to-do__list">
        { this.createList() }
      </div>
    )
  }
}

// PropTypes
ToDoList.propTypes = {
  toDoItems: PropTypes.array.isRequired,
}

export default ToDoList;
