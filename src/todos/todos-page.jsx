import React from 'react';
import classnames from 'classnames';

import TodosNewForm from '../todos/todos-new-form';
import TodosList from '../todos/todos-list';
import TodosSummary from '../todos/todos-summary';

const TodosPage = (p) => (
	<main className={ classnames('page todos', p.className) }>
		<TodosNewForm onSubmit={ p.onNewSubmit } />

		<TodosList todos={ p.list } />

		{ !!p.summary &&
			<TodosSummary { ...p.summary } />
		}
	</main>
);

TodosPage.propTypes = {
	className: React.PropTypes.string,
	list: React.PropTypes.array,
	summary: React.PropTypes.object,
	onNewSubmit: React.PropTypes.func
};

export default TodosPage;
