import React, { Component } from 'react';
import openSocket from 'socket.io-client';

import Start from "./components/start/start";
import Lobby from "./components/lobby/lobby";
import Logger from "./components/logger/logger";
import Game from "./components/game/game";

import './components/gridlock.css';

const socket = openSocket('http://localhost:8300');

class GridLock extends Component {
  constructor(props){
    super(props);
    this.state = {
      gameStates: [
        (<Start setGameState={this.setGameState.bind(this)} />),
        (<Lobby setGameState={this.setGameState.bind(this)} />),
        (<Game setGameState={this.setGameState.bind(this)} />)
      ],
      log: "Logs: "};
  }

  log(message){
    this.setState({log: message});
  }

  setGameState(state){
    this.setState({gameState: this.state.gameStates[state]});
  }

  componentDidMount() {
    socket.emit("handshake", "Bounce Test");
    socket.on("handshaken", msg => {
      console.log(msg);
    });
    this.setGameState(0);
  }

  render() {
    return (
      <div>
        <Logger log={this.state.log} />
        {this.state.gameState}
      </div>
    );
  }
}

export default GridLock;
