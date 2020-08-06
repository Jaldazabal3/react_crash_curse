import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {

  getStyle = () => {
    return {
      backgroundColor: '#f4f4f4',
      padding: '10px',
      textDecoration: this.props.todoItem.completed ? 'line-through' : 'none'
    }
  } 

  markComplete = (e) => {
    console.log(e.title);
    e.completed = !e.completed;
    console.log(e.title);
  }

  render() {
    const { id, title } = this.props.todoItem;
    return (
      <div style={ this.getStyle() }>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />
          { title }
        </p>
      </div>
    )
  }
}

TodoItem.propTypes = {
  todoItem: PropTypes.object.isRequired
}

export default TodoItem
