import React from 'react';
import { Route } from 'react-router-dom';

import FrontPage from '../content/FrontPage';
import Profile from '../content/Profile';

const Content = props => (
  <div className="row">
    <div className="col">
      <Route exact path="/" render={() => <FrontPage {...props} />} />
      <Route path="/profile" render={() => <Profile {...props} />} />
    </div>
  </div>
);

export default Content;
