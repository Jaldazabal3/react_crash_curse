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
          <button style={deleteItemBtn} onClick={this.props.deleteItem.bind(this, id)}>x</button>
        </p>
      </div>
    )
  }
}

TodoItem.propTypes = {
  todoItem: PropTypes.object.isRequired
}

const deleteItemBtn = {
  backgroundColor: '#ff0000',
  color: '#ffffff',
  border: NamedNodeMap,
  padding: '5px 10px',
  borderRadius: '50%',
  cursor: 'pointer',
  marginLeft: '20px'
}

export default TodoItem
