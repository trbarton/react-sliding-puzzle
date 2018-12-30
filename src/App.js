import React, { Component } from 'react';
import Game from './Puzzle/Game';
import PuzzleList from './PuzzleList';
import './App.scss';
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div id="game-wrapper">
        <Router basename={process.env.PUBLIC_URL}>
          <div>
            <Route path="/" exact component={PuzzleList} />
            <Route path="/puzzle/:id?" component={Game} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
