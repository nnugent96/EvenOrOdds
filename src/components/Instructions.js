import React from 'react';
import { connect } from 'react-redux';
import { collapseInstructions, expandInstructions } from '../actions/settings';

class Instructions extends React.Component {
  render(){
    return (
      <div style={{margin:'100px'}}>
        {
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
        }
      </div>
    )
  }
}  


const mapStateToProps = state => {
  console.log('state', state);

  return { ...state };
}

const mapDispatchToProps = dispatch => {
  return {
    expandInstructions: () => dispatch(expandInstructions()),
    collapseInstructions: () => dispatch(collapseInstructions())
  };
}

const componentConnector = connect(mapStateToProps, mapDispatchToProps);

export default componentConnector(Instructions);
