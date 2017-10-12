import React from 'react';
import PropTypes from 'prop-types';

import Image from '../components/Image';

const propTypes = {
  animal: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string,
    image: PropTypes.string,
    gender: PropTypes.string,
    breed: PropTypes.string,
    color: PropTypes.string,
    birthdate: PropTypes.string,
    weight: PropTypes.string,
    notes: PropTypes.string
  }).isRequired
};

const Animal = props => (
  <div className="profile-section rounded container-fluid">
    <div className="row text-center">
      <div className="col"><h4>My name is {props.animal.name}</h4></div>
    </div>
    <div className="row justify-content-md-center">
      <Image className="circle" src={props.animal.image} alt={props.animal.name} />
    </div>
    <div className="row">
      <div className="col">My Gender</div>
      <div className="col"><strong>{props.animal.gender}</strong></div>
    </div>
    <div className="row">
      <div className="col">Breed</div>
      <div className="col"><strong>{props.animal.breed}</strong></div>
    </div>
    <div className="row">
      <div className="col">My Color</div>
      <div className="col"><strong>{props.animal.color}</strong></div>
    </div>
    <div className="row">
      <div className="col">Date Born</div>
      <div className="col"><strong>{props.animal.birthdate}</strong></div>
    </div>
    <div className="row">
      <div className="col">My Weight</div>
      <div className="col"><strong>{props.animal.weight}</strong></div>
    </div>
    <div className="row text-center">
      <div className="col"><strong>Additional Notes</strong></div>
    </div>
    <div className="row"><strong>{props.animal.notes}</strong></div>
  </div>
);

Animal.propTypes = propTypes;

export default Animal;
