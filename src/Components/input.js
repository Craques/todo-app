import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Input, Button} from '@material-ui/core';
import {Add} from '@material-ui/icons';
import {addTodo} from './../redux/actions/todos.actions.js'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {blueGrey} from '@material-ui/core/colors';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: blueGrey[800]
		},
	},
	overrides: {
    	MuiButton: {
    		root: {
    			marginRight: 25,
    			marginBottom: 5
    		}
    	},
    	MuiInput: {
    		root: {
    			paddingLeft: 20
    		}
    	}
    }	
})

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
			<MuiThemeProvider theme={theme}>
				<Input
	            	ref="todoInput"
	            	value={this.state.text}
	                placeholder={'Enter the task here'}
	                fullWidth = {true}
	                endAdornment={
	                  	<Button
	                  		variant="fab"
	                  		color="primary"
	                  		onClick={()=>{this.submitTodo()}}
	                  	>
	                    	<Add/>
	                  	</Button>
	                }
	                onChange = {(e)=>{this.setState({text: e.target.value})}}
	            />
			</MuiThemeProvider>
		)
	}
}

export default connect()(TodoInput)