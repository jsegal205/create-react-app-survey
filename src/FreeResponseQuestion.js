import React, { Component } from 'react';

class FreeResponseQuestion extends Component {
  render() {
    return (
      <div className="free-response">
        <p>Tell me your favorite cat story!</p>
        <textarea id="catstory" rows="10" cols="50"></textarea>
      </div>
    );
  }
}

export default FreeResponseQuestion;
