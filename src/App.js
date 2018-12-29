import React, { Component } from 'react';
import Game from './Game';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="game-wrapper">
        <h1 className="title">ReactJS Slide Puzzle</h1>
        <Game></Game>
      </div>
    );
  }
}

export default App;
