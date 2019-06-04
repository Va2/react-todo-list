import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
    render() {
        return (
            <ul className="list-group my-5">
                <h3 className="text-center">
                    TodoList
                </h3>
                <TodoItem />
                <button type="button" className="btn btn-danger btn-block mt-5">
                    Clear list
                </button>
            </ul>
        )
    }
}
