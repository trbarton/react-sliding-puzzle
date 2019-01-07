import React, { Component } from 'react';
import Game from './Puzzle/Game';
import PuzzleList from './PuzzleList';
import './App.scss';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Start from './Start/Start';
import styled from 'styled-components';
import WinForm from './WinForm/WinForm';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

class App extends Component {
  render() {
    return (
      <div id="game-wrapper">
        <Router basename={process.env.PUBLIC_URL}>
          <Container>
            <Route path="/" exact component={Start} />
            <Route path="/puzzle/:id?" component={Game} />
            <Route path="/win" component={WinForm} />
          </Container>
        </Router>
      </div>
    );
  }
}

export default App;
