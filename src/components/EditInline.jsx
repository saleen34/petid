import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

const propTypes = {
  initialValue: PropTypes.string
};

const defaultProps = {
  initialValue: ''
};

class EditInline extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      isEditing: false,
      value: ''
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleClick (e, data) {
    this.setState({
      isEditing: !this.state.isEditing,
      value: this.value
    });
  }

  handleChange (event) {
    this.setState({ value: event.target.value });
  }

  handleBlur () {
    this.setState({ isEditing: false });
  }

  render () {
    if (!this.state.isEditing) {
      return (
        <div
          className="EditInline"
          role="presentation"
          onClick={this.handleClick}
        >
          {this.props.initialValue}
        </div>
      );
    }

    return <Input initialValue={this.props.initialValue} onBlur={this.handleBlur} />;
  }
}

EditInline.propTypes = propTypes;
EditInline.defaultProps = defaultProps;

export default EditInline;
