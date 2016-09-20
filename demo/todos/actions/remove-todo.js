export const REMOVE_TODO = 'REMOVE_TODO';

export function removeTodo(id) {
	return { type: REMOVE_TODO, id };
}