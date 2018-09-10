import React, { Component } from 'react';

import Token from "./token";

import './game.css';

class Gamepiece extends Component {
  constructor(props){
    super(props);
    this.state = {
      token: "hidden"
    };
  }

  placePiece(){
    this.setState({token: "visible"});
  }

  render() {
    return (
      <div onClick={this.placePiece.bind(this)} className="gamepiece">
        <Token token={this.state.token} />
      </div>
    );
  }
}

export default Gamepiece;