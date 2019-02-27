import React, { Component } from 'react';
import './App.css';
import ToDoList from './components/ToDoList/ToDoList';

class App extends Component {
  state = {
    toDoItems: [
      {
        id: 1,
        title: 'Hello world',
        completed: true,
      },
      {
        id: 2,
        title: 'Hello world.1',
        completed: false,
      },
      {
        id: 3,
        title: 'Hello world.2',
        completed: false,
      },
    ]
  }

  toggleToDo = (id) => {
    this.setState( {  
      toDoItems: this.state.toDoItems.map((toDoItem) => {
        if(toDoItem.id === id) toDoItem.completed = !toDoItem.completed;
        return toDoItem;
      }) 
    });
  }

  render() {
    return (
      <div className="App">
        <ToDoList 
          toDoItems = { this.state.toDoItems }
          toggleToDo = { this.toggleToDo }
        />
      </div>
    );
  }
}

export default App;
