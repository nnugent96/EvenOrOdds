import React from 'react';
import { connect } from 'react-redux';
import { collapseInstructions, expandInstructions } from '../actions/settings';

class Instructions extends React.Component {
  render() {
    return (
      <div style={{margin:'100px'}}>
        {
          !this.props.gameStarted ? (
            this.props.instructionsExpanded ? (
              <div>
                <h3>Instructions:</h3>
                <div>
                  <p>
                    <li>Try and guess whether the next car is even or odd.</li>
                    <li>Jacks and Kings are counted as odd.</li>
                    <li>Jokers and Queens are counted as even.</li>
                  </p>
                </div>
                <button onClick={this.props.collapseInstructions}>Hide Instructions</button>
              </div>
            ) : (
              <div>
                <h3>Instructions:</h3>
                <br />
                <button onClick={this.props.expandInstructions}>Show Instructions</button>
              </div>
            )
          ) : <p></p>
        }
      </div>
    )
  }
}

const componentConnector = connect(
  state => ({
    instructionsExpanded: state.settings.instructionsExpanded,
    gameStarted: state.settings.gameStarted
  }),
  {
    expandInstructions,
    collapseInstructions
  }
);

export default componentConnector(Instructions);
