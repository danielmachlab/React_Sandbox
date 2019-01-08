import React, { Component } from 'react';
import './App.css';
import Welcome from './components/Welcome';
import Weather from './components/Weather';
import ThatWasEasy from './components/ThatWasEasy';
import BunchOfButtons from './components/BunchOfButtons';
import FormikExample from './components/FormikExample';
import MyFormik from './components/MyFormik';



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
          <ThatWasEasy label="jazz"/>
        </div>
        <div>
          <BunchOfButtons/>
        </div>
        <div>
          <FormikExample/>
        </div>
        <div className="CenterThatThing">
          <MyFormik/>
        </div>

        
      </div>
    );
  }
}

export default App;
