import React, { Component } from 'react';
import './App.css';
import Header from './Components/header';
import {Grid, Input, Button, IconButton, InputAdornment} from '@material-ui/core';
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
            item xs={4}
            direction={'column'}
          >
            <Grid>
              <Input
                placeholder={'Enter the task here'}
                fullWidth = {true}
                endAdornment={
                  <IconButton>
                    <Add/>
                  </IconButton>
                }
              />
              
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
