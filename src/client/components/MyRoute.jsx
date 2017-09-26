import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

const propTypes = {
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
  person: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
    cell: PropTypes.string,
    home: PropTypes.string,
    address1: PropTypes.string,
    address2: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    zip: PropTypes.string,
    country: PropTypes.string
  }).isRequired
};

const MyRoute = ({
  path,
  exact,
  component,
  person
}) => (
  <Route
    exact={exact}
    path={typeof path === 'object' ? path.pathname : path}
    component={component}
    person={person}
  />
);

MyRoute.propTypes = propTypes;

export default MyRoute;
