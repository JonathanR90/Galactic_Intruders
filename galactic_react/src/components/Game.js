import React, { Component } from 'react';

export default class Game extends Component {
  render() {
    return (
      <div className="game">
        { this.props.children }
      </div>
    )
  }
}
