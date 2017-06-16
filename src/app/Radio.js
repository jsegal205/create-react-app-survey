import React, { Component } from 'react';

class Radio extends Component {
  constructor(props) {
    super(props);

    // this.onSelectChangeHandler = this.props.onSelectChangeHandler.bind(this);
  }

  render() {
    return (
      <div>
        <input type="radio" id={this.props.id} name={this.props.name} value={this.props.value} />
        {this.props.children}
      </div>
    );
  }
}

Radio.propTypes = {
  id: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
}

export default Radio;
