import React, {Component} from 'react';
import {Tabs, Tab, Typography, AppBar, IconButton} from '@material-ui/core';
import {connect} from 'react-redux';
import {Close} from '@material-ui/icons';

class AppTabBar extends Component{

	setVisibilityFilter = (event, value)=>{
		const {dispatch} = this.props
		dispatch({type: 'SET_VISIBILITY_VALUE', value})
		//update the visible todos
	}

	render(){
		const {filter} = this.props;
		return(
			<AppBar position='static' color='default'>
				<Tabs onChange={this.setVisibilityFilter} value={filter}>
					<Tab value={'SHOW_ACTIVE'} label="Active"/>
					<Tab value={'SHOW_COMPLETED'} label="Completed"/>

					<Typography style={{flex: 1}}/>

					<IconButton 
						color='secondary'
					>
						<Close/>
					</IconButton>
				</Tabs>
			</AppBar>
		)
	}
}

function mapStateToProps(state){
	const {filter} = state;
	return {filter}
}

export default connect(mapStateToProps)(AppTabBar)