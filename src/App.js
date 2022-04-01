import React, { Component } from 'react';
import './styles/App.css';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';

class App extends Component {
  render() {
    return (
      <div>
        <GeneralInfo />
        <Education />
      </div>
    );
  }
}

export default App;
