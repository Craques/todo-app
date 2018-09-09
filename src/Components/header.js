import React, {Component} from 'react';
import {AppBar, Toolbar, Typography, IconButton} from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {blueGrey} from '@material-ui/core/colors';
import {Create} from '@material-ui/icons';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: blueGrey[900]
		},
	}
})

class Header extends Component{

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