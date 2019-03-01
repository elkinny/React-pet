import React, { Component } from 'react';
import AddToDo from './components/AddToDo/AddToDo';
import ToDoList from './components/ToDoList/ToDoList';
import axios from 'axios';

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
      .delete(`${this.props.DbLink}/${id}`)
      .then(res =>
        this.props.changeState({
          toDoItems: this.props.toDoItems.filter(
            toDoItem => toDoItem.id !== id
          ),
        })
      )
      .catch(err =>
        this.props.changeState({
          toDoItems: this.props.toDoItems.filter(
            toDoItem => toDoItem.id !== id
          ),
        })
      );
  };

  addToDo = title => {
    const newToDo = {
      id: this._generateId(),
      title,
      completed: false,
    };
    axios.post(this.props.DbLink, newToDo).then(res => {
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
