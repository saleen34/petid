import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

const MenuItem = ({ name, link }) => (
  <li className="nav-item">
    <Link className="Link nav-link" to={link}>{name}</Link>
  </li>
);

MenuItem.propTypes = propTypes;

export default MenuItem;
