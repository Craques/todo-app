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
			})

			return updatedState
		default:
			return state
	}
}

const rootReducer = combineReducers({
	todos: todoReducer
})

const enhancer = compose(
	applyMiddleware(thunk),
	window.devToolsExtension ? window.devToolsExtension(): f => f
)

const store = createStore(rootReducer, enhancer)

export default store