import React, { Component } from 'react';

class Checkbox extends Component {
  constructor(props) {
    super(props);

    // this.onSelectChangeHandler = this.props.onSelectChangeHandler.bind(this);
  }

  render() {
    return (
      <div>
        <input type="checkbox"
        id={this.props.id} name={this.props.name} value={this.props.value} />
        <label htmlFor={this.props.id}>{this.props.label}</label>
        {this.props.children}
      </div>
    );
  }
}

Checkbox.propTypes = {
  id: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
}

export default Checkbox;
