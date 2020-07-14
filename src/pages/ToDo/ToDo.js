import React, { Component } from 'react';
import axios from 'axios';

import { AddToDo, ToDoList } from 'components/ToDo';
import { generateId } from 'utils';

export class ToDo extends Component {
  state = {
    toDoItems: [],
  };

  componentDidMount() {
    axios.get(process.env.REACT_APP_DB_LINK).then(res =>
      this.setState({
        toDoItems: res.data,
      })
    );
  }

  changeState = newState => {
    this.setState(newState);
  };

  toggleToDo = id => {
    const toDoItems = this.state.toDoItems.map(toDoItem => {
      if (toDoItem.id === id) toDoItem.completed = !toDoItem.completed;
      return toDoItem;
    });

    this.changeState({ toDoItems });
  };

  deleteToDo = id => {
    axios
      .delete(`${process.env.REACT_APP_DB_LINK}/${id}`)
      .then(res =>
        this.changeState({
          toDoItems: this.state.toDoItems.filter(
            toDoItem => toDoItem.id !== id
          ),
        })
      )
      .catch(() => this.changeState({
        toDoItems: this.state.toDoItems.filter(
          toDoItem => toDoItem.id !== id
        ),
      }));
  };

  addToDo = title => {
    const newToDo = {
      id: generateId(),
      title,
      completed: false,
    };

    axios
      .post(process.env.REACT_APP_DB_LINK, newToDo)
      .then(res => {
        this.changeState({
          toDoItems: [...this.state.toDoItems, res.data],
      });
    });
  };

  render() {
    return (
      <>
        <AddToDo addToDo={this.addToDo} />
        <ToDoList
          toDoItems={this.state.toDoItems}
          toggleToDo={this.toggleToDo}
          deleteToDo={this.deleteToDo}
        />
      </>
    );
  }
}

export default ToDo;
