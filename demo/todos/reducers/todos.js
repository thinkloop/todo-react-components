const ON_NEW_SUBMIT = 'ON_NEW_SUBMIT';
const ON_TODO_BUTTON_CLICKED = 'ON_TODO_BUTTON_CLICKED';
const ON_TODO_CHECKBOX_TOGGLED = 'ON_TODO_CHECKBOX_TOGGLED';
const ON_SUMMARY_STATUS_SELECTED = 'ON_SUMMARY_STATUS_SELECTED';

import store from '../../store';

import { PENDING, COMPLETE, TOTAL } from '../../../src/todos/constants/statuses';

const defaultState = {
	newForm: {
		placeholder: 'What do you need to do?',
		onSubmit: description => store.dispatch({ type: ON_NEW_SUBMIT, description })
	},
	list: [],
	summary: makeSummary([], TOTAL)
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

	case ON_TODO_CHECKBOX_TOGGLED:
		newTodos = { ...todos };
		let todoIndex = newTodos.list.findIndex(todo => todo.id === action.id);
		newTodos.list[todoIndex] = {
			...newTodos.list[todoIndex],
			isComplete: !newTodos.list[todoIndex].isComplete
		};
		newTodos.summary = makeSummary(newTodos.list);
		return newTodos;

	case ON_SUMMARY_STATUS_SELECTED:
		newTodos = { ...todos };
		newTodos.list = newTodos.list.filter(todo => action.selectedSummaryStatus === TOTAL || (todo.isComplete && action.selectedSummaryStatus === COMPLETE)  || (!todo.isComplete && action.selectedSummaryStatus === PENDING));
		newTodos.summary = makeSummary(newTodos.list, action.selectedSummaryStatus);

		return newTodos;

	default:
		return todos;
	}
}


function addTodoToList(list, action) {
	const id = new Date().toISOString() + '-' + (Math.random() * 10000).toFixed(0);
	list.push({
		id: id,
		isComplete: false,
		description: action.description,
		buttonLabel: 'delete',
		onButtonClicked: () => store.dispatch({ type: ON_TODO_BUTTON_CLICKED, id }),
		onCheckboxToggled: () => store.dispatch({ type: ON_TODO_CHECKBOX_TOGGLED, id })
	});
	return list;
}

function makeSummary(list, selectedSummaryStatus) {
	const newSummary = list.reduce((p, item) => {
		p.countTotal++;
		item.isComplete && p.countComplete++;
		!item.isComplete && p.countIncomplete++;
		return p;
	}, {
		countTotal: 0,
		countComplete: 0,
		countIncomplete: 0
	});

	newSummary.countTotal = `${newSummary.countTotal} total`;
	newSummary.countComplete = `${newSummary.countComplete} complete`;
	newSummary.countIncomplete = `${newSummary.countIncomplete} remaining`;

	newSummary.selectedSummaryStatus = selectedSummaryStatus;

	newSummary.onClickPending = () => store.dispatch({ type: ON_SUMMARY_STATUS_SELECTED, selectedSummaryStatus: PENDING });
	newSummary.onClickComplete = () => store.dispatch({ type: ON_SUMMARY_STATUS_SELECTED, selectedSummaryStatus: COMPLETE });
	newSummary.onClickTotal = () => store.dispatch({ type: ON_SUMMARY_STATUS_SELECTED, selectedSummaryStatus: TOTAL });

	return newSummary;
}
