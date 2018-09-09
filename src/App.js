import React, { Component } from 'react';
import './App.css';
import Header from './Components/header';
import TodoInput from './Components/input';
import TodoList from './Components/todoList';
import AppTabBar from './Components/tabBar';
import {Grid} from '@material-ui/core';


class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Header/>
        <Grid
          container
          style={{flex:1, marginTop: 50}}
          justify={'center'}
        >
          <Grid 
            item 
            xs={10}
            md={6}
            lg={4}
            style={{overflow: 'hidden'}}
          >
            <TodoInput/>
            <div style={{borderWidth: 1, borderColor: 'rgba(0,0,0, 0.12)', paddingTop: 0, paddingBottom: 0, borderStyle: 'solid'}}>
              <TodoList/>
              <AppTabBar/>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state){
  const {filter, todos} = state;
  return {filter, todos}
}

export default App;
