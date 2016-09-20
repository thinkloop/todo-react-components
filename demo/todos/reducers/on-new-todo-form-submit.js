import { addTodo } from '../../todos/actions/add-todo';
import store from '../../store';

export default function (onNewTodoFormSubmit = description => store.dispatch(addTodo(description)), action) {
	return onNewTodoFormSubmit;
}
