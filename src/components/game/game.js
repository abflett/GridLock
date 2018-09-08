import React, { Component } from 'react';

import Gamepiece from './gamepiece'

import './game.css';

class Game extends Component {

    squares = []

    exitGame(){
        this.props.setGameState(1);
    }

    componentDidMount() {
        for(var i = 0; i < 64; i++){
            this.squares.push({id: i});
        }
        console.log(this.squares.length);
        console.log(this.squares[5].id)
      }

  render() {
    return (
      <div className="game">
        <button className="exit" onClick={this.exitGame.bind(this)}>Exit</button>
        <div className="board">
            <Gamepiece />
        </div>
      </div>
    );
  }
}

export default Game;