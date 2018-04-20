import React, { Component } from 'react';
import { connect } from 'react-redux';
import  { addTodo, toggleTodo, deleteTodo } from './todoAction.js';

class Todo extends Component {
  constructor() {
    super();
    this.state = {
      newTodo: ""
    }
  }

  handleChange = (e) => {
    this.setState({ newTodo: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.newTodo);
    this.setState({ newTodo: ""});
  }

  handleDelete = (e, id) => {
    e.preventDefault()
    this.props.deleteTodo(id)
  }

  render() {
    return (
	<div>
	<h3>Todo List:</h3>
	<form onSubmit={ this.handleSubmit }>
	<input
      type="text"
      placeholder="Add your todo here:"
      value={this.state.newTodo}
      onChange={this.handleChange}
	/>
	</form>
	<ul>
	{this.props.todos.map((todo, index) => {
	  return (
	    <li key={index}>
	      <input
		type="checkbox"
		onClick={() => this.props.toggleTodo(todo.id)}
		checked={todo.completed}
		/>
		{todo.value} <a onClick={(e) => this.handleDelete(e, todo.id)} href="">x</a>
	    </li>
	  )
	})}
      </ul>
	</div>
    )
  }
}

const mapStateToProps = (state) => {
  return { todos: state }
}

const mapDispatchToProps = { addTodo, toggleTodo, deleteTodo }

export default connect(mapStateToProps, mapDispatchToProps)(Todo)


