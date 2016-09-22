import React from 'react';
import classnames from 'classnames';

const TodoItem = (p) => (
	<article className={ classnames('list-item', { 'checked': p.isComplete }, p.className) }>
		<input className="checkbox" type="checkbox" checked={ p.isComplete } onChange={ p.onCheckboxToggled } />
		<span className="description">{ p.description }</span>
		<button className="button" onClick={ p.onButtonClicked }>
			{ p.buttonLabel }
		</button>
	</article>
);

TodoItem.propTypes = {
	className: React.PropTypes.string,

	description: React.PropTypes.string,
	isComplete: React.PropTypes.bool,

	buttonLabel: React.PropTypes.string,

	onButtonClicked: React.PropTypes.func,
	onCheckboxToggled: React.PropTypes.func
};

export default TodoItem;
