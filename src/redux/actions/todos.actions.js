export function addTodo(text){
	return({
		type: 'ADD_TODO',
		todo: {task: text, completed: false}
	})
}