import React, {Component} from 'react';
import {AppBar, Toolbar, Typography, IconButton} from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {orange} from '@material-ui/core/colors';
import {Create} from '@material-ui/icons';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: orange[900]
		},
	}
})

console.log(theme)

class Header extends Component{
	constructor(props){
		super(props)
	}

	render(){
		return(
			<MuiThemeProvider theme={theme}>
				<AppBar position="static">
					<Toolbar>
						<IconButton color='inherit'>
							<Create/>
						</IconButton>
						<Typography variant="title" color="inherit">
							 Todo App
						</Typography>
					</Toolbar>
				</AppBar>
			</MuiThemeProvider>
		)
	}
}

export default Header;