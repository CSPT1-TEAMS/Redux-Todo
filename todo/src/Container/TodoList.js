import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleComplete } from '../Actions/actions';

class TodoList extends Component {
    constructor(){
        super();
        this.state = {
            todo: ''
        };
    }

    handleFormSubmit = e => {
        e.preventDefault();
        this.props.addTodo(this.state.todo)
        console.log(this.state.todo);
        this.setState({ todo: '' })
    };

    inputChange = e => {
        this.setState({ todo: e.target.value })
    };

    // handleToggle = (todoId) => {
    //     this.props.toggleComplete(todoId);
    // };


    render(){
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <input placeholder="Add to the list" type="text" value={this.state.todo} onChange={this.inputChange} />
                    <h1>
                         List of things todo! 
                    </h1>
                    <ul>
                        {this.props.todos.map((todo, i) => {
                            return (
                                <li key={i} onClick={() => this.props.toggleComplete(i)} style={todo.completed ? {color: "silver", textDecoration: 'line-through' } : null }>
                                    <div>
                                        <p>{todo.todoItem}</p>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                    {/* <button onClick={this.buttonAddTodo} type="button">
                        Add your todo item to the list
                    </button> */}
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
      todos: state
    };
  };

  export default connect(mapStateToProps,{addTodo, toggleComplete})(TodoList);