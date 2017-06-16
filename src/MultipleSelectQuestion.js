import React, { Component } from 'react';
import Checkbox from './app/Checkbox';

class MultipleChoiceQuestion extends Component {
  render() {
    return (
      <div className="Container">
        <p>Which breeds of cats do you own? (you can pick multiple)</p>
        <Checkbox
          id="siamese"
          label="Siamese"
          name="siamese-chk"
          value="siamese"
        />
        <Checkbox
          id="persian"
          label="Persian"
          name="persian-chk"
          value="persian"
        />
        <Checkbox
          id="bengal"
          label="Bengal"
          name="bengal-chk"
          value="bengal"
        />
        <Checkbox
          id="sphynx"
          label="Sphynx"
          name="sphynx-chk"
          value="sphynx"
        />
      </div>
    );
  }
}

export default MultipleChoiceQuestion;
