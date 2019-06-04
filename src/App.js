import React, { Component, Fragment } from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

class App extends Component {
  render() {
    return (
      <Fragment>
        <h1>Hello from App component</h1>
        <TodoInput />
        <TodoList />
      </Fragment>
    );
  }
}

export default App;
