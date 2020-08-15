import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from "./components/pages/About";
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

  deleteItem = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  }
  
  generateUniqueId = () => {
    return Math.floor(Math.random() * (100 - 0) + 0)
  }

  addTodoItem = (title) => {
    // this.state.todos.push({
    //   id: this.state.todos[this.state.todos.length - 1].id + 1,
    //   title: title,
    //   completed: false
    // });
    const newTodo = {
      id: this.generateUniqueId(),
      title,
      completed: false
    };
    console.log(newTodo.id)
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  render () {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <div>
              <Header />
              <Route exact path="/" render={props => (
                <React.Fragment>
                  <Todos 
                    todos = {this.state.todos} 
                    markComplete={this.markComplete}
                    deleteItem={this.deleteItem}
                  />
                  <AddTodo
                    addTodo={this.addTodoItem}
                  />
                </React.Fragment>
              )} />
              <Route path="/about" component={About} />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
