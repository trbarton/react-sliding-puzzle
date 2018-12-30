
// {
//   "completed": false,
//   "best": 6
// }

export const getPuzzleData = (puzzleNumber) => {
  const puzzlesString = localStorage.getItem(`puzzle-${puzzleNumber}`);
  if (puzzlesString) {
    return JSON.parse(puzzlesString);
  }
  return {
    completed: false,
    best: null
  }
}

export const setPuzzleData = (puzzleNumber, numMoves) => {
  const puzzlesString = localStorage.getItem(`puzzle-${puzzleNumber}`);
  if (puzzlesString) {
    const puzzleData = JSON.parse(puzzlesString);
    if (numMoves < puzzleData['best']) {
      localStorage.setItem(
        `puzzle-${puzzleNumber}`,
        JSON.stringify({
          completed: true,
          best: numMoves
        })
      )
    }
  } else {
    localStorage.setItem(
      `puzzle-${puzzleNumber}`,
      JSON.stringify({
        completed: true,
        best: numMoves
      })
    )
  }
}