import { ADD_TODO } from '../../todos/actions/add-todo';
import { REMOVE_TODO } from '../../todos/actions/remove-todo';
import store from '../../store';

import { removeTodo } from '../../todos/actions/remove-todo';

export default function (todos = [], action) {
	switch (action.type) {
	case ADD_TODO:
		let id = (Math.random() * 100).toFixed(0);
		let newTodos = todos.slice();
		newTodos.push({
			id: id,
			isComplete: false,
			description: action.description,
			buttonLabel: 'delete',
			onButtonClicked: () => store.dispatch(removeTodo(id))
		});
		return newTodos;

	case REMOVE_TODO:
		return todos.filter(todo => todo.id !== action.id);

	default:
		return todos;
	}
}
