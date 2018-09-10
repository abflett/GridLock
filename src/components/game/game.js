import React, { Component } from 'react';

import Gamepiece from './gamepiece'

import './game.css';

class Game extends Component {
    constructor(props){
        super(props);
        this.state = {
            numPieces: this.props.options,
            pieces: []
        };
    }

    exitGame(){
        this.props.setGameState(1);
    }

    makeBoard(){
        let pieces = this.state.pieces;
        for(let i = 0; i < this.state.numPieces; i++){
            pieces.push(<Gamepiece id={i} key={i}/>);
        }
        this.setState({pieces: pieces});
    }

    componentDidMount(){
        this.makeBoard();
    }

  render() {
    return (
      <div className="game">
        <button className="exit" onClick={this.exitGame.bind(this)}>Exit</button>
        <div className="board">
            {this.state.pieces}
        </div>
      </div>
    );
  }
}

export default Game;