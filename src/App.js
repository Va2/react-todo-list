import React, { Component } from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

class App extends Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-10 col-md-8 mx-auto mt-4">
						<h3 className="text-capitalize text-center">TodoInput</h3>
						<TodoInput />
						<TodoList />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
