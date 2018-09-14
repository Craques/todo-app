import React, {Component} from 'react';
import {Tabs, Tab, Typography, AppBar, IconButton, Dialog, Button, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@material-ui/core';
import {connect} from 'react-redux';
import {Close} from '@material-ui/icons';
import {removeAllTodos} from './../redux/actions/todos.actions';
import {blueGrey} from '@material-ui/core/colors';
import{MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';

//Add a modal or what these guys like to call a dialog in this file
const theme = createMuiTheme({
	palette: {
		primary: {
			main: blueGrey[800]
		},
		secondary: {
			main: "#fff"
		}
	}
})

class AppTabBar extends Component{
	constructor(props){
		super(props)

		this.state = {
			dialogVisible: false
		}
	}

	setVisibilityFilter = (event, value)=>{
		const {dispatch} = this.props
		dispatch({type: 'SET_VISIBILITY_VALUE', value})
		//update the visible todos
	}

	clearTodos = ()=>{
		const {dispatch} = this.props;
		dispatch(removeAllTodos())
		this.setState({dialogVisible: false})

	}

	render(){
		const {filter} = this.props;
		return(
			<MuiThemeProvider theme={theme}>
				<AppBar position='static' color='primary'>
					<Tabs 
						onChange={this.setVisibilityFilter} 
						value={filter}
						indicatorColor="secondary"
					>
						<Tab value={'SHOW_ACTIVE'} label="Active"/>
						<Tab value={'SHOW_COMPLETED'} label="Completed"/>

						<Typography style={{flex: 1}}/>

						<IconButton 
							color='inherit'
							onClick={()=>this.setState({dialogVisible: true})}
						>
							<Close/>
						</IconButton>
					</Tabs>

					<Dialog
						open={this.state.dialogVisible}
					>
						<DialogTitle>Delete all todos</DialogTitle>
						<DialogContent>
							<DialogContentText>
								If you want to remove all your todos press delete otherwise cancel.
								You may not be able to recover your todos
							</DialogContentText>

							<DialogActions>
								<Button color="primary" variant="contained"
									onClick={()=>this.clearTodos()}
								>
									Delete
								</Button>

								<Button color="primary" variant="outlined"
									onClick={()=>this.setState({dialogVisible: false})}
								>
									Cancel
								</Button>
							</DialogActions>
						</DialogContent>
					</Dialog>
				</AppBar>
			</MuiThemeProvider>
		)
	}
}

function mapStateToProps(state){
	const {filter} = state;
	return {filter}
}

export default connect(mapStateToProps)(AppTabBar)