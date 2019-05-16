import React from 'react';
import { connect } from 'react-redux';
import { startGame, cancelGame } from '../actions/settings';

class StartStop extends React.Component {
  render(){
    return (
      this.props.gameStarted ? (
        <div>
          <h3>The game is on!</h3>
          <br />
          <button onClick={this.props.cancelGame}>Cancel Game</button>
        </div>
      ) : (
        <div>
          <h3>A new game awaits</h3>
          <br />
          <button onClick={this.props.startGame}>Start Game</button>
        </div>
      )
    )
  }
}  


const mapStateToProps = state => {
  console.log('state', state);

  return { ...state };
}

const mapDispatchToProps = dispatch => {
  return {
    startGame: () => dispatch(startGame()),
    cancelGame: () => dispatch(cancelGame())
  };
}

const componentConnector = connect(mapStateToProps, mapDispatchToProps);

export default componentConnector(StartStop);
