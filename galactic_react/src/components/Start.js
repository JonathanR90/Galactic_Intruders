import React, { Component } from 'react';

export default class Start extends Component {
  render() {
    return (
      <div className="start">
        { this.props.children }
      </div>
    )
  }
}
