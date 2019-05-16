import React, { Component } from "react";
import StartStop from "./StartStop";
import Instructions from "./Instructions";

class App extends Component {
  render(){
    return(
      <div>
        <h2>♥️ ♠️ Evens or Odds ♦️ ♣️</h2>
        <StartStop />
        <Instructions />
      </div>
    );
  }
}

export default App;
