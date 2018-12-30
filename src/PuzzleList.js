import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const PuzzleListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const PuzzleButton = styled.button`
  margin: 6px;
  width: 300px;

  &:hover {
    background: rgba(72, 172, 222, 0.5)
  }
`

const puzzles = [
  { name: "Puzzle 1", path: "/puzzle/1" },
  { name: "Puzzle 2", path: "/puzzle/2" },
  { name: "Puzzle 3", path: "/puzzle/3" },
  { name: "Puzzle 4", path: "/puzzle/4" },
]

const PuzzleList = ({match}) => (
    <PuzzleListContainer>
      {
        puzzles.map((puzzle, index) => {
          return (
            <Link to={`${puzzle.path}`} key={index}>
              <PuzzleButton className="button">{puzzle.name}</PuzzleButton>
            </Link>
          )
        })
      }
    </PuzzleListContainer>
);

export default PuzzleList;