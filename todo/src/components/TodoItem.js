import React, { Component } from 'react';


export default class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      completed: false
    }
  }

  render() {
    return (
      <div className="TodoItem">
      {this.props.todo !== '' ?
          <div>
            <p> {this.props.todo}</p>
          </div> : <div></div>}
      </div>
    );
  }
}