import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../Actions/actions';

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


    render(){
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <input placeholder="Add to the list" type="text" value={this.state.todo} onChange={this.inputChange} />
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

  export default connect(mapStateToProps,{addTodo})(TodoList);