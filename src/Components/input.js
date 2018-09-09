import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Input, IconButton} from '@material-ui/core';
import {Add} from '@material-ui/icons';
import {addTodo} from './../redux/actions/todos.actions.js'

class TodoInput extends Component{
	constructor(props){
		super(props)

		this.state = {
			text: "",
			id: 0
		}
	}

	submitTodo = ()=>{
		const {dispatch} = this.props;
		let {text, id} = this.state;
		const nextId = ++id
		if(text.trim() !== ""){
			dispatch(addTodo(text, id))
			//Clear the textInput
			this.setState({text: "", id: nextId})
		}
	}

	render(){
		return(
            <Input
            	ref="todoInput"
            	value={this.state.text}
                placeholder={'Enter the task here'}
                style={{paddingLeft: 10, paddingRight: 15}}
                fullWidth = {true}
                endAdornment={
                  	<IconButton
                  		onClick={()=>{this.submitTodo()}}
                  	>
                    	<Add/>
                  	</IconButton>
                }
                onChange = {(e)=>{this.setState({text: e.target.value})}}
            />
		)
	}
}

export default connect()(TodoInput)