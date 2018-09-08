import React, { Component } from 'react';

import Splash from '../splash/splash';

import './start.css';

class Start extends Component {

    triggerLobby(){
      this.props.setGameState(1);
    }

  render() {
    return (
      <div className="start">
        <Splash />
        <button>Exit</button>
        <button>Sound</button>
        <h1 className="logo">GridLock</h1>
        <h2 className="edition">Pencil</h2>
        <input></input>
        <input></input>
        <input type="checkbox"></input>Remember me
        <div>
            <button>Login</button>
            <button>Sign Up</button>
        </div>
        <button onClick={this.triggerLobby.bind(this)}>Play as Guest</button>
        <footer>
            <p>There are <strong>453453</strong> users connected right now!
            </p>
        </footer>
      </div>
    );
  }
}

export default Start;