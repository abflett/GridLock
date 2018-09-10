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
      log: "Logs: ",
      gameOptions: {gameSize: 64}
    };
  }

  gameStates = [
    (<Start setGameState={this.setGameState.bind(this)} />),
    (<Lobby setGameState={this.setGameState.bind(this)} />),
    (<Game options={64} setGameState={this.setGameState.bind(this)} />)
  ];

  log(message){
    this.setState({log: message});
  }

  thegameoption(){
    return 64;
  }

  setGameState(state){
    this.setState({gameState: this.gameStates[state]});
  }

  componentDidMount() {
    socket.emit("handshake", "Bounce Test");
    socket.on("handshaken", msg => {
      console.log(msg);
    });
    this.setGameState(2);
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
