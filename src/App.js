import React from 'react';
import Todos from './components/Todos';
import './App.css';

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Do the laundry',
        completed: false
      },
      {
        id: 2,
        title: 'Cook an omelette',
        completed: false
      },
      {
        id: 3,
        title: 'Move clothes',
        completed: false
      }
    ]
  }

  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    })})
  }

  render () {
    return (
      <div className="App">
        <div>
          <Todos todos = {this.state.todos} markComplete={this.markComplete}/>
        </div>
      </div>
    );
  }
}

export default App;
