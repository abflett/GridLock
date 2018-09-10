import React, { Component } from 'react';
import './game.css';

class Token extends Component {
  render() {
    return (
      <div className="token" style={{visibility: this.props.token}}>

      </div>
    );
  }
}

export default Token;