import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  user: PropTypes.shape({
    _id: PropTypes.string,
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

const Owner = props => (
  <div className="profile-section rounded container-fluid">
    <div className="text-center"><h4>My Owner</h4></div>
    <div className="row">
      <div className="col">Owner</div>
      <div className="col"><strong>{props.user.name}</strong></div>
      <div className="col">Address1</div>
      <div className="col"><strong>{props.user.address1}</strong></div>
    </div>
    <div className="row">
      <div className="col">Email</div>
      <div className="col"><strong>{props.user.email}</strong></div>
      <div className="col">Address2</div>
      <div className="col"><strong>{props.user.address2}</strong></div>
    </div>
    <div className="row">
      <div className="col">CellPhone</div>
      <div className="col"><strong>{props.user.cell}</strong></div>
      <div className="col">City</div>
      <div className="col"><strong>{props.user.city}</strong></div>
    </div>
    <div className="row">
      <div className="col">HomePhone</div>
      <div className="col"><strong>{props.user.home}</strong></div>
      <div className="col">State</div>
      <div className="col"><strong>{props.user.state}</strong></div>
    </div>
    <div className="row">
      <div className="col" />
      <div className="col" />
      <div className="col">Zip</div>
      <div className="col"><strong>{props.user.zip}</strong></div>
    </div>
    <div className="row">
      <div className="col" />
      <div className="col" />
      <div className="col">Country</div>
      <div className="col"><strong>{props.user.country}</strong></div>
    </div>
  </div>
);

Owner.propTypes = propTypes;

export default Owner;
