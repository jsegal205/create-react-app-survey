import React, { Component } from 'react';
import Radio from './app/Radio';

class MultipleChoiceQuestion extends Component {
  render() {
    return (
      <div>
        <p>Which of these is not a cat?</p>
        <radiogroup>
          <Radio
            id="cat1"
            name="cat1-radio"
            value="cat1"
          >
            <img src="photos/cat1.jpg" height="200" width="200" />
          </Radio>
          <Radio
            id="dog"
            name="dog-radio"
            value="dog"
          >
            <img src="photos/dog.jpg" height="200" width="200" />
          </Radio>
          <Radio
            id="cat2"
            name="cat2-radio"
            value="cat2"
          >
            <img src="photos/cat2.jpg" height="200" width="200" />
          </Radio>
          <Radio
            id="cat3"
            name="cat3-radio"
            value="cat3"
          >
            <img src="photos/cat3.jpg" height="200" width="200" />
          </Radio>
        </radiogroup>
      </div>
    );
  }
}

export default MultipleChoiceQuestion;
