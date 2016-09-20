export const ADD_TODO = 'ADD_TODO';

export function addTodo(description) {
	return { type: ADD_TODO, description };
}
