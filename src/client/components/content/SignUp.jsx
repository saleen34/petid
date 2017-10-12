import React from 'react';
import * as api from '../../api';

class SignUp extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      password: ''
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async onSubmit (event) {
    event.preventDefault();
    const user = await api.createUser(this.state);
debugger;
  }

  handleChange (event) {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

    this.setState({
      [event.target.name]: value
    });
  }

  render () {
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
