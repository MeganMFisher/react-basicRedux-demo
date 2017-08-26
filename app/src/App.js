import React, { Component } from 'react';
import DisplaySuperheroes from './components/displayHeroes/DisplaySuperheroes';
import AddSuperhero from './components/addHero/AddSuperhero';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Redux Demo</h2>
        </div>
        <div className='heroesContainer'>
          <DisplaySuperheroes />
          <AddSuperhero />
        </div>
      </div>
    );
  }
}

export default App;
