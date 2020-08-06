import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends React.Component {

  render() {
    return this.props.todos.map(
      todoItem => <TodoItem key={todoItem.id} todoItem = {todoItem} markComplete = {this.props.markComplete} />
    );
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos;