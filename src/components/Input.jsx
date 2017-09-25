import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  initialValue: PropTypes.string.isRequired
};

class Input extends React.Component {
  constructor (props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event) {
    this.setState({ value: event.target.value });
  }

  render () {
    return (<input type="text" value={this.state.value} onChange={this.handleChange} />);
  }
}

Input.defaultProps = {
  initialValue: ''
};

Input.propTypes = propTypes;

export default Input;
