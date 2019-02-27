import React, { Component } from 'react'
import './ToDoItem.css';
import PropTypes from 'prop-types'

export class ToDoItem extends Component {
  getStyle = () => {
    return this.props.toDoItem.completed ? 'completed' : '';
  }

  toggleToDo = () => {
    this.props.toggleToDo(this.props.toDoItem.id);
  }
  
  render() {
    const { id, title } = this.props.toDoItem;
    return (
      <div className={ `to-do__item ${this.getStyle()}` }>
        <input
          type="checkbox"
          checked = {this.props.toDoItem.completed}
          onChange = { this.toggleToDo }
          id = { id }
        />
        <label
          className='to-do__title'
          htmlFor={ id }
        >
          { title }
        </label>
      </div>
    )
  }
}

// PropTypes
ToDoItem.propTypes = {
  toDoItem: PropTypes.object.isRequired,
}

export default ToDoItem
