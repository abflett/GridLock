import React, { Component } from 'react';
import './logger.css';

class Logger extends Component {
  constructor(props){
    super(props);
    this.state = {toggle: "hidden"};
  }

  toggle(){
    if(this.state.toggle === "visible"){
      this.setState({toggle: "hidden"});
    } else {
      this.setState({toggle: "visible"});
    }
  }

  render() {
    return (
      <div className="logger">
        <button className="show-hide" onClick={this.toggle.bind(this)}>Logs</button>
        <p className="logs" style={{visibility: this.state.toggle}}>{this.props.log}</p>
      </div>
    );
  }
}

export default Logger;