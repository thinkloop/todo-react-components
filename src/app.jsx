import React from 'react';
import { render } from 'react-dom';

import TodosPage from './todos/todos-page';

export default function (appElement, data) {
	let page;

	page = <TodosPage
		className="todos-page"
		{ ...data.todos }
	/>;

	render(page, appElement);
}

