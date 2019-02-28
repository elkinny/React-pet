import React, { Component } from 'react';
import AddToDo from './../../components/AddToDo/AddToDo';
import ToDoList from './../../components/ToDoList/ToDoList';
import axios from 'axios';

export class ToDo extends Component {
  _generateId = () =>
    '_' +
    Math.random()
      .toString(36)
      .substr(2, 9);

  state = {
    toDoItems: [],
  };

  DbLink = 'https://my-json-server.typicode.com/elkinny/db/toDo';

  componentDidMount() {
    axios.get(this.DbLink).then(res =>
      this.setState({
        toDoItems: res.data,
      })
    );
  }

  toggleToDo = id => {
    this.setState({
      toDoItems: this.state.toDoItems.map(toDoItem => {
        if (toDoItem.id === id) toDoItem.completed = !toDoItem.completed;
        return toDoItem;
      }),
    });
  };

  deleteToDo = id => {
    axios.delete(`${this.DbLink}/${id}`).then(res =>
      this.setState({
        toDoItems: this.state.toDoItems.filter(toDoItem => toDoItem.id !== id),
      })
    );
  };

  addToDO = title => {
    const newToDo = {
      id: this._generateId(),
      title,
      completed: false,
    };
    axios.post(this.DbLink, newToDo).then(res => {
      this.setState({
        toDoItems: [...this.state.toDoItems, res.data],
      });
    });
  };

  render() {
    return (
      <React.Fragment>
        <AddToDo addToDO={this.addToDO} />
        <ToDoList
          toDoItems={this.state.toDoItems}
          toggleToDo={this.toggleToDo}
          deleteToDo={this.deleteToDo}
        />
      </React.Fragment>
    );
  }
}

export default ToDo;
