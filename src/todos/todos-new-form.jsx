import React, { Component } from 'react';
import classnames from 'classnames';

export default class TodosNewForm extends Component {
	static propTypes = {
		className: React.PropTypes.string,
		placeholder: React.PropTypes.string,
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
		const p = this.props;
		const s = this.state;
		return (
			<form className={ classnames(p.className) } onSubmit={ this.handleOnSubmit }>
				<input className="todos-new-form-input" value={ s.value } placeholder={ p.placeholder } onChange={ this.handleOnChange } />
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
