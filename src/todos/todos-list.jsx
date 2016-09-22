import React from 'react';
import classnames from 'classnames';

import TodoItem from '../todos/todo-item';

const TodosList = (p) => (
	<section className={ classnames('list', p.className) }>
		{ !!p.todos && p.todos.map(todo =>(
			<TodoItem
				key={ todo.id }
				{ ...todo }
			/>
		))}
	</section>
);

TodosList.propTypes = {
	className: React.PropTypes.string,
	todos: React.PropTypes.array
};

export default TodosList;
