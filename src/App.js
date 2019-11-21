import React from 'react';
// import Navbar from './Navbar'
import TodoItem from './TodoItem'
// import Footer from './Footer'
import './App.css';
import todosData from './TodosData'
// import JestWorker from 'jest-worker';

class App extends React.Component
{
  constructor() {
    super()
    this.state = {
      isLoggedIn: true,
      todos: todosData
    }
  }

  render()
  {
    const loggedIn = this.state.isLoggedIn ? "In" : "Out"
    const todoList = this.state.todos.map((todo) => {
      return <TodoItem key = {todo.id} todos = {todo} />
    })
    return (
      <div className = "todo-list">
        {todoList}
        <p>I am logged {loggedIn}</p>
      </div>
    )
  }
}

export default App;
