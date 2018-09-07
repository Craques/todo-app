import React, {Component} from 'react';
import {connect} from 'react-redux';
import {List, ListItem, ListItemText, Checkbox, Divider,
	ListItemSecondaryAction, IconButton} 
from '@material-ui/core';
import {toggleTodo, deleteTodo} from './../redux/actions/todos.actions.js';
import {Close} from '@material-ui/icons';

class TodoList extends Component{

	handleChange = (id)=>{
		const {dispatch} = this.props;
		dispatch(toggleTodo(id))
	}

	pressDelete = (id)=>{
		const {dispatch} = this.props;
		dispatch(deleteTodo(id))
	}
	
	renderTodos = ()=>{
		let {todos} = this.props

		return todos.map((todo, i)=>{
			//render todos that are not yet completed
			if(!todo.completed){
				return(
					<div key = {i}>
						<ListItem>
							<Checkbox onChange={()=>this.handleChange(todo.id)}/>
							<ListItemText primary={todo.task}/>
							<ListItemSecondaryAction>
								<IconButton 
									onClick={()=>this.pressDelete(todo.id)}
								>
									<Close/>
								</IconButton>
							</ListItemSecondaryAction>
						</ListItem>
						<Divider/>	
					</div>
				)
			}
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
	const {todos} = state;
	return {todos}
}

export default connect(mapStateToProps)(TodoList)