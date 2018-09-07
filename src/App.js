import React, { Component } from 'react';
import './App.css';
import Header from './Components/header';
import TodoInput from './Components/input';
import TodoList from './Components/todoList';
import {Grid} from '@material-ui/core';
import {Add} from '@material-ui/icons';


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
          >
            <TodoInput/>
            <TodoList/>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
