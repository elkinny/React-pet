import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

export class ToDoItem extends Component {
  getStyle = () => {
    return this.props.toDoItem.completed ? 'completed' : '';
  };

  toggleToDo = () => {
    this.props.toggleToDo(this.props.toDoItem.id);
  };

  deleteToDo = () => {
    this.props.deleteToDo(this.props.toDoItem.id);
  };

  render() {
    const { id, title } = this.props.toDoItem;

    return (
      <li>
        <label htmlFor={id}>
          <input
            type="checkbox"
            id={id}
            checked={this.props.toDoItem.completed}
            onChange={this.toggleToDo}
          />
          <i />
          <span>{title}</span>
          <button onClick={this.deleteToDo}>–</button>
        </label>
      </li>
    );
  }
}

// PropTypes
ToDoItem.propTypes = {
  toDoItem: PropTypes.object.isRequired,
  toggleToDo: PropTypes.func.isRequired,
  deleteToDo: PropTypes.func.isRequired,
};

export default ToDoItem;
