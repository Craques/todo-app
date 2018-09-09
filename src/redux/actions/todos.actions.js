export function addTodo(text, id){
	return({
		type: 'ADD_TODO',
		todo: {task: text, completed: false, id}
	})
}

export function toggleTodo(id){
	return({
		type: 'TOGGLE_TODO',
		id
	})
}

export function deleteTodo(id){
	return({
		type: 'DELETE_TODO',
		id
	})
}

export function removeAllTodos(){
	return({
		type: 'REMOVE_ALL_TODOS'
	})
}