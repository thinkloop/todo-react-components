import React, { Component } from 'react';

export default class TodoNew extends Component {
	static propTypes = {
		onSubmit: React.PropTypes.func
	};

	constructor(props) {
		super(props);

		this.state = {
			value: this.props.value || ''
		};

		this.handleOnChange = this.handleOnChange.bind(this);
		this.handleOnSubmit = this.handleOnSubmit.bind(this);
	}

	render() {
		const s = this.state;
		return (
			<form className="new-todo-form" onSubmit={ this.handleOnSubmit }>
				<input className="new-todo-input" value={ s.value } placeholder="What needs to be done?" onChange={ this.handleOnChange } />
			</form>
		);
	}

	handleOnChange = (e) => {
		this.setState({ value: e.target.value });
	}

	handleOnSubmit = (e) => {
		e.preventDefault();
		this.setState({ value: '' });
		this.props.onSubmit(this.state.value);
	}
}
