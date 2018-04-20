import React, { Component } from 'react';
import {connect} from 'react-redux';
import '.components/Todo.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Todos/>
      </div>
    );
  }
}

export default  connect(mapStateToProps, {addTodo})(App);
