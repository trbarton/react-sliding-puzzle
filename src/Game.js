import React, { Component } from 'react';
import Menu from './Menu';
import Tile from './Tile';

export default class Game extends Component {

  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = this.getInitialState();
  }

  shuffle = (array) => {

    // switches first two tiles
    function switchTiles(array) {
      var i = 0;

      // find the first two tiles in a row
      while (!array[i] || !array[i + 1]) i++;

      // store tile value
      var tile = array[i];
      // switche values
      array[i] = array[i + 1];
      array[i + 1] = tile;

      return array;
    }

    // counts inversions
    function countInversions(array) {
      // make array of inversions
      var invArray = array.map(function (num, i) {
        var inversions = 0;
        for (let j = i + 1; j < array.length; j++) {
          if (array[j] && array[j] < num) {
            inversions += 1;
          }
        }
        return inversions;
      });
      // return sum of inversions array
      return invArray.reduce(function (a, b) {
        return a + b;
      });
    }

    // fischer-yates shuffle algorithm
    function fischerYates(array) {
      var counter = array.length, temp, index;

      // While there are elements in the array
      while (counter > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * counter);
        // Decrease counter by 1
        counter--;
        // And swap the last element with it
        temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
      }

      return array;
    }

    // Fischer-Yates shuffle
    array = fischerYates(array);

    // check for even number of inversions
    if (countInversions(array) % 2 !== 0) {
      // switch two tiles if odd
      array = switchTiles(array);
    }

    return array;
  }

  getInitialState = () => {
    return {
      // initial state of game board
      tiles: this.shuffle([
        1, 2, 3,
        4, 5, 6,
        7, 8, ''
      ]),
      win: false,
    };
  }

  checkBoard = () => {
    var tiles = this.state.tiles;

    for (var i = 0; i < tiles.length - 1; i++) {
      if (tiles[i] !== i + 1) return false;
    }

    return true;
  }

  tileClick = (tileEl, position, status) => {
    console.log(`position: ${position}`);

    var tiles = this.state.tiles;
    // Possible moves
    // [up,right,down,left]
    // 9 = out of bounds
    var moves = [
      [null, 1, 3, null], [null, 2, 4, 0], [null, null, 5, 1],
      [0, 4, 6, null], [1, 5, 7, 3], [2, null, 8, 4],
      [3, 7, null, null], [4, 8, null, 6], [5, null, null, 7]
    ];

    function animateTiles(i, move) {
      var directions = ['up', 'right', 'down', 'left'];
      var moveToEl = document.querySelector('.tile:nth-child(' + (move + 1) + ')');
      const direction = directions[i];
      tileEl.classList.add('move-' + direction);
      // this is all a little hackish.
      // css/js are used together to create the illusion of moving blocks
      setTimeout(function () {
        moveToEl.classList.add('highlight');
        tileEl.classList.remove('move-' + direction);
        // time horribly linked with css transition
        setTimeout(function () {
          moveToEl.classList.remove('highlight');
        }, 400);
      }, 200);
    }

    // called after tile is fully moved
    // sets new state
    function afterAnimate() {
      tiles[position] = '';
      tiles[move] = status;
      this.setState({
        tiles: tiles,
        moves: moves,
        win: this.checkBoard()
      });
    };

    // return if they've already won
    if (this.state.win) return;

    // check possible moves
    for (var i = 0; i < moves[position].length; i++) {
      var move = moves[position][i];
      // if an adjacent tile is empty
      if (typeof move === 'number' && !tiles[move]) {
        animateTiles(i, move);
        setTimeout(afterAnimate.bind(this), 200);
        break;
      }
    }
  }

  restartGame = () => {
    this.setState(this.getInitialState());
  }

  render() {
    return (
      <div>
        <div id="game-board">
          {
            this.state.tiles.map((tile, position) => {
              return (<Tile status={tile} pos={position} tileClick={this.tileClick} />)
            })
          }
        </div>
        <Menu winClass={this.state.win ? 'button win' : 'button'} status={this.state.win ? 'You win!' : 'Solve the puzzle.'} restart={this.restartGame} />
      </div>
    )
  }
};