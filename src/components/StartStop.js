import React from 'react';
import { connect } from 'react-redux';
import { startGame, cancelGame } from '../actions/settings';
import { fetchNewDeck } from '../actions/deck';
import fetchStates from '../reducer/fetchStates';

class StartStop extends React.Component {
  startGameHelper = () => {
    this.props.startGame();
    this.props.fetchNewDeck();
  }

  render() {

    if (this.props.fetchState === fetchStates.error){
      return (
        <div>
          <p>Please try reloading the application. An error has occurred.</p>
          <p>{this.props.message}</p>
        </div>
      )
    }

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
          <button onClick={this.startGameHelper}>Start Game</button>
        </div>
      )
    )
  }
}

const componentConnector = connect(
  state => {
    const { 
      settings: { gameStarted },
      deck: { fetchState, message }
    } = state;
    return ({ gameStarted , fetchState, message});
  },
  {
    startGame,
    cancelGame, 
    fetchNewDeck
  }
);

export default componentConnector(StartStop);
