import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ImagesContainer from './ImagesContainer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src='https://media.glassdoor.com/sqll/155178/lumedx-squarelogo-1373582727679.png' className="App-logo" alt="logo" />
          <h2>HealthView CardioPACS</h2>
        </div>
        <p className="App-intro">
        </p>
        <ImagesContainer />
      </div>
    );
  }
}

export default App;
