import React, { Component } from 'react';
import './App.css';
import Welcome from './components/Welcome';
import Weather from './components/Weather';
import ThatWasEasy from './components/ThatWasEasy';



class App extends Component {
  
  render() {
    const person = "sara"
    return (
      <div className="App">
        <div className="Welcome"> 
          <Welcome name = {person} />
        </div>
        <div className="Weather">
          <Weather temp = "70" />
        </div>
        <div>
          <ThatWasEasy />
        </div>
        
      </div>
    );
  }
}

export default App;
