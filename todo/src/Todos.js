import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodoToState, toggleTodoOnState } from './actions';
class Todos extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            todo: ''
        }
    }

    inputChange = (e) => {
        this.setState({todo: e.target.value })
    }

    addTodo = () => {
        const { todo } = this.state;
        this.props.addTodoToState(todo);
        this.setState({ todo: ''});
    }
    render() {
        return (
            <div>
                <span>Add Todo</span>
                <input type="text" value={this.state.todo} onChange={this.inputChange} />
                <button onClick={this.addTodo}>Submit</button>
                <h2>Todos:</h2>
                <ul>
                    {this.props.todos.map( (todo, index)=> {
                        const style = {
                            textDecoration: todo.completed ? 'line-through' : 'none'
                        }
                        return <li key={index} style={style} onClick={() => {this.props.toggleTodoOnState(index, !todo.completed)}}>{todo.value}</li>
                    })}
                </ul>
            </div>
        )
    }
}

