import React from 'react';
import { Route } from 'react-router-dom';

import FrontPage from '../content/FrontPage';
import Profile from '../content/Profile';
import SignUp from '../content/SignUp';
import Login from '../content/Login';

const Content = props => (
  <div className="row">
    <div className="col">
      <Route exact path="/" render={() => <FrontPage {...props} />} />
      <Route path="/profile" render={() => <Profile {...props} />} />
      <Route path="/signup" render={() => <SignUp {...props} />} />
      <Route path="/login" render={() => <Login {...props} />} />
    </div>
  </div>
);

export default Content;
