import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './logo.png';
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 25px;
  width: 400px;
`;

class Start extends Component {

  render() {
    return(
      <Container>
        <img src={logo} width="300px"></img>
        <h1>CEO Cádiz 2019</h1>
        <h2>Win an entry</h2>
        <p><strong>Instructions:</strong> Complete the puzzle by
        tapping on a tile adjacent to the blank tile. The aim is to
        uncover the piece of map. When finished a box will appear for
        you to enter your email and license number (or category you're running if open). Fill this out and submit to be entered into the prize draw.</p>
        <Link to="/puzzle/3">
          <button className="button">Start</button>
        </Link>
      </Container>
    )
  }
}

export default Start;