import React, { Component } from 'react';
import { connect } from "react-redux";
import { addTodo } from '../actions'
import NewTodo from './NewTodo'
import TodoItem from './TodoItem'


class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
  }

  // componentDidMount() {
  //   this.props.addTodo();
  // }

  handleSubmit = (value) => {
    this.setState({todos: this.props.addTodo(value)});
  }

  render() {
    console.log(this.state.todos.length);
    return (
      this.state.todos.length === 0 ? 
      <div>
        <h3>Todos:</h3>
        <NewTodo handleSubmit={this.handleSubmit}/>
      </div> :
      <div className="App">
        <h3>Todos:</h3>
          <ul>
            {this.props.todos.map(todo => {
                return <li>{todo}</li>;
              })}
          </ul>
        <NewTodo handleSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      todos: state
  };
};

export default connect(mapStateToProps, { addTodo })(TodoList);
