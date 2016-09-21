const ON_NEW_SUBMIT = 'ON_NEW_SUBMIT';
const ON_TODO_BUTTON_CLICKED = 'ON_TODO_BUTTON_CLICKED';

import store from '../../store';

const defaultState = {
	list: [],
	summary: makeSummary([]),
	onNewSubmit: description => store.dispatch({ type: ON_NEW_SUBMIT, description })
};

export default function (todos = defaultState, action) {
	let newTodos;

	switch (action.type) {
	case ON_NEW_SUBMIT:
		newTodos = { ...todos };
		newTodos.list = addTodoToList(todos.list.slice(), action);
		newTodos.summary = makeSummary(newTodos.list);
		return newTodos;

	case ON_TODO_BUTTON_CLICKED:
		newTodos = { ...todos };
		newTodos.list = todos.list.filter(todo => todo.id !== action.id);
		newTodos.summary = makeSummary(newTodos.list);
		return newTodos;

	default:
		return todos;
	}
}

function addTodoToList(list, action) {
	const id = (Math.random() * 100).toFixed(0);
	list.push({
		id: id,
		isComplete: false,
		description: action.description,
		buttonLabel: 'delete',
		onButtonClicked: () => store.dispatch({ type: ON_TODO_BUTTON_CLICKED, id })
	});
	return list;
}

function makeSummary(list) {
	return list.reduce((p, item) => {
		p.countTotal++;
		item.isComplete && p.countComplete++;
		!item.isComplete && p.countIncomplete++;
		return p;
	}, {
		countTotal: 0,
		countComplete: 0,
		countIncomplete: 0
	});
}
