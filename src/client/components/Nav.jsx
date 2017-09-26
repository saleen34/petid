import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import MenuItem from '../components/MenuItem';

const propTypes = {
  menus: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string
      })).isRequired
};

const Nav = props => (
  <div className="row">
    <div className="col">
      <nav className="navbar navbar-toggleable-md navbar-light bg-faded navbar-static-top">
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <Link className="navbar-brand" to="/">PetQR</Link>
        <div className="collapse navbar-collapse mt-2 mt-md-0" id="navbarNavDropdown">
          <ul className="navbar-nav">
            {props.menus.map((item, index) => (
              <MenuItem name={item.name} key={item.id} />
            ))}
          </ul>
        </div>
      </nav>
    </div>
  </div>
 );

Nav.propTypes = propTypes;

export default Nav;
