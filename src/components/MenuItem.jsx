import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const propTypes = {
  name: PropTypes.string.isRequired
};

const MenuItem = ({ name }) => (
  <li className="nav-item">
    <Link className="Link nav-link" to="/profile">{name}</Link>
  </li>
);

MenuItem.propTypes = propTypes;

export default MenuItem;
