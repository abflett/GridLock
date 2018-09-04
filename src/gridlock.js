import React, { Component } from 'react';
import openSocket from 'socket.io-client';

const socket = openSocket('http://localhost:8300');

class GridLock extends Component {

  componentDidMount() {
    socket.emit("handshake", "Testing connection...");
    socket.on("handshaken", function(msg){
      console.log(msg);
    });
  }

  render() {
    return (
      <div>
        GridLock
      </div>
    );
  }
}

export default GridLock;
