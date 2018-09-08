import React, { Component } from 'react';
import './lobby.css';

class Lobby extends Component {
  exitLobby(){
    this.props.setGameState(0);
  }

  playgame(){
    this.props.setGameState(2);
  }

  render() {
    return (
      <div className="lobby">
        <button className="exit" onClick={this.exitLobby.bind(this)}>Exit</button>
        <button onClick={this.playgame.bind(this)}>Practice</button>
        <button>Quick Match</button>
        <div className="games">
            <button>Join</button>
            <button>Create</button>
            <div className="userlist">
                <input type="text" placeholder="4v4 Skeletons -- 2/4"></input>
            </div>
        </div>
      </div>
    );
  }
}

export default Lobby;