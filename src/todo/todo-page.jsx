import React from 'react';
import classnames from 'classnames';

import TodoNewForm from '../todo/todo-new-form';
import TodoItem from '../todo/todo-item';

const TodoPage = (p) => (
	<main className={ classnames('page todo', p.className) }>
		<TodoNewForm onSubmit={ p.onNewTodoFormSubmit } />

		<ul>
			{ !!p.todos && p.todos.map(todo =>(
				<TodoItem key={ todo.id } { ...todo } />
			))}
		</ul>

		{ !!p.todoSummary &&
			<section className="todo-summary">
				<span className="todo-summary-count">{ p.todoSummary.count }</span>
			</section>
		}
	</main>
);

TodoPage.propTypes = {
	className: React.PropTypes.string,
	todos: React.PropTypes.array,
	todoSummary: React.PropTypes.object,
	onNewTodoFormSubmit: React.PropTypes.func
};

export default TodoPage;
