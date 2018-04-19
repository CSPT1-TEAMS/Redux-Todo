import React, { Component } from "react";
import { connect } from 'react-redux';
import { addTodo } from '../actions';


class NewTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
          value: '',
        }
      }


    handleChange = (e) => {
        this.setState({value: e.target.value});
    }

    handleSubmit = (e) => {
        this.props.handleSubmit(this.state.value);
        this.setState({value: ''});
    }
   
    render() {
        return (
            <div>
                <input value={this.state.value} onChange={this.handleChange} placeholder='Add New Todo'/>
                <button type='submit' onClick={this.handleSubmit}>Enter</button>
            </div>
        );
    }
}


export default NewTodo;