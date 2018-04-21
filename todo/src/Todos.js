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
}