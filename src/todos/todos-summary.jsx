import React from 'react';
import classnames from 'classnames';

const TodosSummary = (p) => (
	<section className={ classnames('todo-summary', p.className) }>
		<span className="todo-summary-pending">{ `${p.countIncomplete} pending` }</span><br />
		<span className="todo-summary-complete">{ `${p.countComplete} complete` }</span><br />
		<span className="todo-summary-total">{ `${p.countTotal} total` }</span><br />
	</section>
);

TodosSummary.propTypes = {
	className: React.PropTypes.string,
	countIncomplete: React.PropTypes.number,
	countComplete: React.PropTypes.number,
	countTotal: React.PropTypes.number
};

export default TodosSummary;
