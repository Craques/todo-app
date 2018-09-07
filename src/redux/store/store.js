import {combineReducers, applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';

const todoReducer = (state={todos: []}, action)=>{
	switch(action.type){
		case 'ADD_TODO':
			const {todo} = action;
			let todos = state.todos;
			todos = [...todos, todo]
			return {...state, todos: [...state.todos, action.todo]}
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