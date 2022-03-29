import React, { Component } from 'react';
import './styles/App.css';
import GeneralInfo from './components/GeneralInfo';

class App extends Component {
  submitData = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <form>
        <GeneralInfo />
        <button onClick={this.submitData} type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default App;
