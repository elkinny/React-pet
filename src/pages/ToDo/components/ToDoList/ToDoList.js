import React, { Component } from 'react';
import './ToDoList.css';
import ToDoItem from '../ToDoItem/ToDoItem';
import PropTypes from 'prop-types';

class ToDoList extends Component {
  createList() {
    return this.props.toDoItems.map(toDoItem => (
      <ToDoItem
        id={toDoItem.id}
        key={toDoItem.id}
        toDoItem={toDoItem}
        toggleToDo={this.props.toggleToDo}
        deleteToDo={this.props.deleteToDo}
      />
    ));
  }

  render() {
    return <ul className="to-do__list">{this.createList()}</ul>;
  }
}

// PropTypes
ToDoList.propTypes = {
  toDoItems: PropTypes.array.isRequired,
  toggleToDo: PropTypes.func.isRequired,
  deleteToDo: PropTypes.func.isRequired,
};

export default ToDoList;
