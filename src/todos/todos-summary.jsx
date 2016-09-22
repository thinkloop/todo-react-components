import React from 'react';
import classnames from 'classnames';

import { PENDING, COMPLETE, TOTAL } from '../todos/constants/statuses';

const TodosSummary = (p) => (
	<section className={ classnames('todo-summary', p.className) }>
		<span className={ classnames('todo-summary-pending', { 'is-selected': p.selected === PENDING }) } onClick={ p.onClickPending }>{ p.countIncomplete }</span>
		<span className={ classnames('todo-summary-complete', { 'is-selected': p.selected === COMPLETE }) } onClick={ p.onClickComplete }>{ p.countComplete }</span>
		<span className={ classnames('todo-summary-total', { 'is-selected': p.selected === TOTAL }) } onClick={ p.onClickTotal }>{ p.countTotal }</span>
	</section>
);

TodosSummary.propTypes = {
	className: React.PropTypes.string,

	countIncomplete: React.PropTypes.string,
	countComplete: React.PropTypes.string,
	countTotal: React.PropTypes.string,

	selected: React.PropTypes.oneOf([PENDING, COMPLETE, TOTAL]),

	onClickPending: React.PropTypes.func,
	onClickComplete: React.PropTypes.func,
	onClickTotal: React.PropTypes.func
};

export default TodosSummary;
