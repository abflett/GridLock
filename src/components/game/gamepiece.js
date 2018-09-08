import React, { Component } from 'react';
import './game.css';

class Gamepiece extends Component {
  placePiece(){
    console.log("piece placed on id: " + this.props.id);
  }

  render() {
    return (
      <div onClick={this.placePiece.bind(this)} className="gamepiece">
        {this.props.id}
      </div>
    );
  }
}

export default Gamepiece;