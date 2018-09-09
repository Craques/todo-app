import React, {Component} from 'react';
import {connect} from 'react-redux';
import {List, ListItem, ListItemText, Checkbox, Divider,
	ListItemSecondaryAction, IconButton} 
from '@material-ui/core';
import {toggleTodo, deleteTodo} from './../redux/actions/todos.actions.js';
import {Close} from '@material-ui/icons';
import {green} from '@material-ui/core/colors';
import{MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import Transition from './transition';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: green[500]
		}
	}
})

class MyListItem extends Component{
	render(){
		const {todo, index, visibleTodos, onCheck, onDelete} = this.props

		return(
			<Transition>
				<div key={todo.id} >
					<ListItem>
						<Checkbox color='primary' onChange={()=>onCheck(todo.id)} checked={todo.completed}/>
						<ListItemText primary={todo.task}/>
						<ListItemSecondaryAction>
							<IconButton 
								onClick={()=>onDelete(todo.id)}
							>
								<Close/>
							</IconButton>
						</ListItemSecondaryAction>
					</ListItem>
					{index + 1 !== visibleTodos.length ? <Divider/> : null}	
				</div>
			</Transition>
		)
	}
} 

class TodoList extends Component{
	componentDidUpdate(prevProps){

		const {dispatch, todos, filter} = this.props

		todos === prevProps.todos
		? null
		:dispatch({type: filter, todos})

		filter === prevProps.filter
		? null
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
		let {visibleTodos} = this.props;

		return visibleTodos.map((todo, index)=>{	
			return(
				<MyListItem 
					todo={todo} 
					index={index} 
					visibleTodos={visibleTodos}
					onCheck={this.handleChange}
					onDelete={this.pressDelete}
					style ={{height: this.props.height}}
				/>
			)
		})
	}

	render(){
		return(
			<MuiThemeProvider theme={theme}>
				<List>
					{this.renderTodos()}
				</List>
			</MuiThemeProvider>
		)
	}
}

function mapStateToProps(state){
	const {todos, visibleTodos, filter} = state;
	return {todos, visibleTodos, filter}
}

export default connect(mapStateToProps)(TodoList)