import {combineReducers, applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';

const todoReducer = (state=[], action)=>{
	let updatedState
	const {id} = action;

	switch(action.type){
		case 'ADD_TODO':
			const {todo} = action;
			return [...state, todo];
		case 'TOGGLE_TODO':
			updatedState = state.map((todo)=>{
				if(todo.id !== id){
					return todo
				}
				return {...todo, completed: !todo.completed}
			})

			return updatedState;
		case 'DELETE_TODO':
			updatedState = state.filter((todo)=>{
				if(todo.id !== id){
					return todo
				}

				return null
			})

			return updatedState
		default:
			return state
	}
}

const visibilityReducer = (state=[], action)=>{
	const {todos, type} = action;
	
	switch(type){
		case 'SHOW_ALL':
			console.log(todos)
			return todos;
		case 'SHOW_COMPLETED':
			return todos.filter((todo)=>{
				return todo.completed === true
			})
		case 'SHOW_ACTIVE':
			console.log('I am working')
			return todos.filter((todo)=>{
				return todo.completed === false
			})
		default:
			return state
	}
}


const visibilityFilterReducer = (state='SHOW_ACTIVE', action)=>{


	switch(action.type){
		case 'SET_VISIBILITY_VALUE':
			return action.value
		default:
			return state
	}
}


const rootReducer = combineReducers({
	todos: todoReducer,
	visibleTodos: visibilityReducer,
	filter: visibilityFilterReducer
})

const enhancer = compose(
	applyMiddleware(thunk),
	window.devToolsExtension ? window.devToolsExtension(): f => f
)

const store = createStore(rootReducer, enhancer)

export default store