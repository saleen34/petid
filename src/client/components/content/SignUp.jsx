import React from 'react';
import SignUpForm from './SignUpForm';
import * as api from '../../api';

class SignUp extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      errors: {},
      user: {
        username: '',
        email: '',
        password: ''
      }
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit (event) {
    const user = {
      username: 'foo',
      email: 'bar@bar.com'
    };

    event.preventDefault();
    api.createUser(user)
      .then(resp => (
        console.log(resp)
      ));
  }

  render () {
    return (
      <SignUpForm
        onSubmit={this.onSubmit}
        errors={this.state.errors}
        user={this.state.user}
      />
    );
  }
}

export default SignUp;
