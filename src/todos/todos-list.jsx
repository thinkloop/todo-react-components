import React from 'react';
import classnames from 'classnames';

import TodoItem from '../todos/todo-item';

const TodosList = (p) => (
	<ul className={ classnames('todos-list', p.className) }>
		{ !!p.todos && p.todos.map(todo =>(
			<TodoItem
				key={ todo.id }
				description={ todo.description }
				isComplete={ todo.isComplete }
				buttonLabel={ todo.buttonLabel }
				onButtonClicked={ todo.onButtonClicked }
			/>
		))}
	</ul>
);

TodosList.propTypes = {
	className: React.PropTypes.string,
	todos: React.PropTypes.array
};

export default TodosList;
