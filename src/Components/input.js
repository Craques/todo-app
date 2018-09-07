import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Input, IconButton} from '@material-ui/core';
import {Add} from '@material-ui/icons';
import {addTodo} from './../redux/actions/todos.actions.js'

class TodoInput extends Component{
	constructor(props){
		super(props)

		this.state = {
			text: ""
		}
	}

	submitTodo = ()=>{
		const {dispatch} = this.props;
		const {text} = this.state;
		if(text.trim() != ""){
			dispatch(addTodo(text))
			//Clear the textInput
			this.setState({text: ""})
		}
	}

	render(){
		return(
            <Input
            	ref="todoInput"
            	value={this.state.text}
                placeholder={'Enter the task here'}
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