import React from 'react';
import * as api from '../../api';
import Profile from '../content/Profile';
import animal from '../../models/animal.json';

class SignUp extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      password: '',
      name: '',
      submitted: false,
      newUser: null
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async onSubmit (event) {
    event.preventDefault();
    const newUser = await api.createUser(this.state);
    this.setState({ submitted: true, newUser });
  }

  handleChange (event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render () {
    if (this.state.submitted) {
      return <Profile user={this.state.newUser} animal={animal} />;
    }

    return (
      <div className="Content container-fluid">
        <form className="form-horizontal" onSubmit={this.onSubmit}>
          <fieldset>
            <div id="legend">
              <legend className="">Register</legend>
            </div>
            <div className="control-group">
              <label className="control-label" htmlFor="username">Username</label>
              <div className="controls">
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="input-xlarge"
                  value={this.state.username}
                  onChange={this.handleChange}
                />
                <p className="help-block">
                  Username can contain any letters or numbers, without spaces
                </p>
              </div>
            </div>

            <div className="control-group">
              <label className="control-label" htmlFor="email">E-mail</label>
              <div className="controls">
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="input-xlarge"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
                <p className="help-block">Please provide your E-mail</p>
              </div>
            </div>

            <div className="control-group">
              <label className="control-label" htmlFor="password">Password</label>
              <div className="controls">
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="input-xlarge"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
                <p className="help-block">Password should be at least 4 characters</p>
              </div>
            </div>

            <div className="control-group">
              <label className="control-label" htmlFor="password_confirm">Password (Confirm)</label>
              <div className="controls">
                <input
                  type="password"
                  id="password_confirm"
                  name="password_confirm"
                  className="input-xlarge"
                />
                <p className="help-block">Please confirm password</p>
              </div>
            </div>

            <div className="control-group">
              <label className="control-label" htmlFor="name">Name</label>
              <div className="controls">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="input-xlarge"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
                <p className="help-block">Please provide your Name</p>
              </div>
            </div>

            <div className="control-group">
              <div className="controls">
                <button className="btn btn-success">Sign Up</button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default SignUp;
