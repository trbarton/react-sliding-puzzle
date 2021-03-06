import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { getPuzzleData } from './Utils/LocalStorage';

const PuzzleListContainer = styled.div`
  display: flex;
  justify-content: center;
`
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 80px);
  grid-row-gap: 5px;
  grid-column-gap: 5px;
`

const PuzzleButton = styled.button`
  width: 80px;
  height: 80px;

  &:hover {
    background: rgba(72, 172, 222, 0.5)
  }
`

const numPuzzles = 21;

const createButtonGrid = (numButtons) => {
  const buttons = [];
  for (let i = 1; i <= numPuzzles; i++) {
    buttons.push(
      <Link to={`/puzzle/${i}`} key={i}>
        <PuzzleButton className={getPuzzleData(i).completed ? 'button complete' : 'button'}>{i}</PuzzleButton>
      </Link>
    )
  }
  return buttons;
}

const PuzzleList = () => [
  <h1 key="title" className="title">Orienteering<br /> Slide Puzzle</h1>,
  <PuzzleListContainer key="puzzleListContainer">
    <GridContainer>
      {createButtonGrid()}
    </GridContainer>
  </PuzzleListContainer>
];

export default PuzzleList;