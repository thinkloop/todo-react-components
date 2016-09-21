import React from 'react';
import classnames from 'classnames';

const TodoItem = (p) => (
	<li className={ classnames('todo-item', p.className, { 'checked': p.isComplete }) }>
		<span className="todo-item-description">{ p.description }</span>
		<button className="todo-item-button" onClick={ p.onButtonClicked }>
			{ p.buttonLabel }
		</button>
	</li>
);

TodoItem.propTypes = {
	className: React.PropTypes.string,
	id: React.PropTypes.string,
	description: React.PropTypes.string,
	isComplete: React.PropTypes.bool,
	buttonLabel: React.PropTypes.string,
	onButtonClicked: React.PropTypes.func
};

export default TodoItem;
