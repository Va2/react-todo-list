import React, { Component } from 'react'
import uuid from 'uuid'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

class App extends Component {
	state={
		items: [],
		id: uuid(),
		item: '',
		editItem: false
	}

	handleChange = event => {
		this.setState({
			item: event.target.value
		})
	}

	handleSubmit = event => {
		event.preventDefault()
		
		const newItem = {
			id: this.state.id,
			title: this.state.item
		}
		
		const updatedItems = [...this.state.items, newItem]

		if (this.state.item.length > 0) {
			this.setState({
				items: updatedItems,
				item: '',
				id: uuid(),
				editItem: false
			})
		}
	}

	clearList = () => {
		this.setState({
			items: []
		})
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-10 col-md-8 mx-auto mt-4">
						<h3 className="text-capitalize text-center">TodoInput</h3>
						<TodoInput
							item={this.state.item}
							handleChange={this.handleChange}
							handleSubmit={this.handleSubmit}
						/>
						<TodoList
							items={this.state.items}
							clearList={this.clearList}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
