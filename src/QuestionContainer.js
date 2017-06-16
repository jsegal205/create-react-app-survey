import React, { Component } from 'react';
import './App.css';
import MultipleChoiceQuestion from './MultipleChoiceQuestion';
import MultipleSelectQuestion from './MultipleSelectQuestion';
import FreeResponseQuestion from './FreeResponseQuestion';

class QuestionContainer extends Component {

  render() {
    return (
      <div className="Container">
        <h1>
          Thank you for your interest in cats!
        </h1>
        <h2>
         Please take a moment and fill out this survey!
        </h2>
        <h3>1</h3>
        <MultipleChoiceQuestion />
        <h3>2</h3>
        <MultipleSelectQuestion />
        <h3>3</h3>
        <FreeResponseQuestion />
        <div>
          <a href="#">Complete survey</a>
        </div>
      </div>
    );
  }
}

export default QuestionContainer;
