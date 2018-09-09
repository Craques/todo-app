import React, {Component} from 'react';
import {Tabs, Tab, Typography, AppBar, IconButton} from '@material-ui/core';
import {connect} from 'react-redux';
import {Close} from '@material-ui/icons';
import {removeAllTodos} from './../redux/actions/todos.actions'
import {blueGrey} from '@material-ui/core/colors';
import{MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles'

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

	setVisibilityFilter = (event, value)=>{
		const {dispatch} = this.props
		dispatch({type: 'SET_VISIBILITY_VALUE', value})
		//update the visible todos
	}

	clearTodos = ()=>{
		const {dispatch} = this.props;
		dispatch(removeAllTodos())

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
							onClick={this.clearTodos}
						>
							<Close/>
						</IconButton>
					</Tabs>
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