import React, { Component } from "react";
import { connect } from 'react-redux';
import StartStop from "./StartStop";

class App extends Component {
  render(){
    return(
      <div>
        <h2>♥️ ♠️ Evens or Odds ♦️ ♣️</h2>
        <StartStop />
      </div>
    );
  }
}

export default App;
