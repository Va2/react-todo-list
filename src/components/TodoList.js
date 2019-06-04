import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
    render() {
        return (
            <Fragment>
                <h1 className="center">Hello from TodoList</h1>
                <TodoItem />
            </Fragment>
        )
    }
}
