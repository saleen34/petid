import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  errors: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
};

const SignUpForm = ({ errors, onSubmit, user }) => (
  <div className="Content container-fluid">
    {errors.summary && <p className="error-message">{errors.summary}</p>}
    <form className="form-horizontal" onSubmit={onSubmit}>
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
              value={user.username}
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
              value={user.email}
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
              value={user.password}
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

SignUpForm.propTypes = propTypes;

export default SignUpForm;
