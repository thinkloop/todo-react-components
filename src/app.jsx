import React from 'react';
import { render } from 'react-dom';

import TodoPage from './todo/todo-page';

export default function (appElement, data) {
	let page = <TodoPage
		className="todo-page"
		todos={ data.todos }
		todoSummary={ data.todoSummary }
		onNewTodoFormSubmit={ data.onNewTodoFormSubmit }
	/>;

	render(page, appElement);
}

