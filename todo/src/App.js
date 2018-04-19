import React, { Component } from 'react';
import './App.css';
import NewTodo from './components/NewTodo.js'
import TodoList from './components/TodoList.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList />
      </div>
    );
  }
}

export default App;
