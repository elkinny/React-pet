import React, { Component } from 'react';
import axios from 'axios';

import { AddToDo, ToDoList } from 'components/ToDo';

export class ToDo extends Component {
  _generateId = () =>
    '_' +
    Math.random()
      .toString(36)
      .substr(2, 9);

  toggleToDo = id => {
    const toDoItems = this.props.toDoItems.map(toDoItem => {
      if (toDoItem.id === id) toDoItem.completed = !toDoItem.completed;
      return toDoItem;
    });

    this.props.changeState({ toDoItems });
  };

  deleteToDo = id => {
    axios
      .delete(`${process.env.REACT_APP_DB_LINK}/${id}`)
      .then(res =>
        this.props.changeState({
          toDoItems: this.props.toDoItems.filter(
            toDoItem => toDoItem.id !== id
          ),
        })
      )
      .catch(() => this.props.changeState({
        toDoItems: this.props.toDoItems.filter(
          toDoItem => toDoItem.id !== id
        ),
      }));
  };

  addToDo = title => {
    const newToDo = {
      id: this._generateId(),
      title,
      completed: false,
    };

    axios
      .post(process.env.REACT_APP_DB_LINK, newToDo)
      .then(res => {
        this.props.changeState({
          toDoItems: [...this.props.toDoItems, res.data],
      });
    });
  };

  render() {
    return (
      <React.Fragment>
        <AddToDo addToDo={this.addToDo} />
        <ToDoList
          toDoItems={this.props.toDoItems}
          toggleToDo={this.toggleToDo}
          deleteToDo={this.deleteToDo}
        />
      </React.Fragment>
    );
  }
}

export default ToDo;
