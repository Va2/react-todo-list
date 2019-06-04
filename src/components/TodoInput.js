import React, { Component } from 'react'

export default class TodoInput extends Component {
    render() {
        return (
            <div className="card card-body my-3">
                <form>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">
                                <i className="fas fa-book" />
                            </div>
                        </div>

                        <input
                            type="text"
                            className="form-control"
                            placeholder="New Todo"
                            name=""
                            id=""
                        />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block mt-3">
                        Add Todo
                    </button>
                </form>
            </div>
        )
    }
}
