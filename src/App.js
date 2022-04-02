import React, { Component } from 'react';
import './styles/App.css';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';

class App extends Component {
  render() {
    return (
      <div>
        <h2>Contact Information</h2>
        <GeneralInfo />
        <h2>Education</h2>
        <Education />
        <h2>Work experience</h2>
        <Experience />
      </div>
    );
  }
}

export default App;
