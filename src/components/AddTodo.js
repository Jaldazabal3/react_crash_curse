import React, { Component } from 'react'

export default class AddTodo extends Component {

  state = {
    title: ''
  }

  updateTitle = (e) => this.setState({ [e.target.name]: e.target.value });

  submitAddTodo = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: '' });
  }
  
  render() {
    return (
      <form style={{display: 'flex'}} onSubmit={this.submitAddTodo}>
        <input
          style={{ flex: 10 }}
          type="text"
          name="title"
          placeholder="Add Todo..."
          value={this.state.title}
          onChange={this.updateTitle}
        />
        <input
          type="submit"
          value="Submit"
          className="btnSubmit"
          style={{flex: 1}}
        />
      </form>
    )
  }
}
