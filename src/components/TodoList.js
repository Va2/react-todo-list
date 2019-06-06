import React, { Component } from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
    render() {
        const {items, clearList, handleDelete, handleEdit, handleDoneTask, handleDeleteDoneTasks} = this.props

        return (
            <ul className="list-group my-5">
                <h3 className="text-center">
                    TodoList
                </h3>

                {
                    items.map(item => {
                        return (
                            <TodoItem
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                completed={item.completed}
                                handleDelete={() => handleDelete(item.id)}
                                handleEdit={() => handleEdit(item.id)}
                                handleDoneTask={handleDoneTask}
                            />
                        )
                    })
                }

                <button 
                    type="button"
                    className="btn btn-danger btn-block mt-5"
                    onClick={handleDeleteDoneTasks}
                >
                    Delete done tasks
                </button>

                <button 
                    type="button"
                    className="btn btn-danger btn-block"
                    onClick={clearList}
                >
                    Delete all tasks
                </button>
            </ul>
        )
    }
}
