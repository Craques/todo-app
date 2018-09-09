import React, {Component} from 'react';
import {connect} from 'react-redux';
import {List, ListItem, ListItemText, Checkbox, Divider,
	ListItemSecondaryAction, IconButton} 
from '@material-ui/core';
import {toggleTodo, deleteTodo} from './../redux/actions/todos.actions.js';
import {Close} from '@material-ui/icons';

class TodoList extends Component{
	componentDidUpdate(prevProps){

		const {dispatch, todos, filter} = this.props

		todos === prevProps.todos
		? console.log(true)
		:dispatch({type: filter, todos})

		filter === prevProps.filter
		? console.log(true)
		:dispatch({type: filter, todos})

	}

	handleChange = (id)=>{
		const {dispatch} = this.props;
		dispatch(toggleTodo(id))
	}

	pressDelete = (id)=>{
		const {dispatch} = this.props;
		dispatch(deleteTodo(id))
	}
	
	renderTodos = ()=>{
		let {todos, isCompleted, visibleTodos, dispatch} = this.props;
		return visibleTodos.map((todo, i)=>{	
			return(
				<div key={i}>
					<ListItem>
						<Checkbox onChange={()=>this.handleChange(todo.id)} checked={todo.completed}/>
						<ListItemText primary={todo.task}/>
						<ListItemSecondaryAction>
							<IconButton 
								onClick={()=>this.pressDelete(todo.id)}
							>
								<Close/>
							</IconButton>
						</ListItemSecondaryAction>
					</ListItem>
					{i + 1 !== visibleTodos.length ? <Divider/> : null}	
				</div>
			)
		})
	}

	render(){
		return(
			<List>
				{this.renderTodos()}
			</List>
		)
	}
}

function mapStateToProps(state){
	const {todos, visibleTodos, filter} = state;
	return {todos, visibleTodos, filter}
}

export default connect(mapStateToProps)(TodoList)