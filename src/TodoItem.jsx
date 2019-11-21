import React from 'react'
import './App.css'

class TodoItem extends React.Component
{
    constructor(props) {
        super(props)
        this.state = {
            isCompleted: false
        }
        this.handleChange = this.handleChange.bind(this)
    }

    completedStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }

    handleChange() {
        console.log(this.props.todos.id)
        this.setState((prevState) => {
            return {
                isCompleted: !prevState.isCompleted
            }
        })
    }

    render(props)
    {
        return (
            <div className = "todo-item">
                <input type = "checkbox" checked = {this.state.isCompleted} onChange = {this.handleChange} />
                <p style = {this.state.isCompleted ? this.completedStyle : null}>{this.props.todos.text}</p>
                <br />
            </div>
        )
    }
}

export default TodoItem
