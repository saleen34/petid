import React from 'react';
import Owner from '../../components/Owner';
import Animal from '../../components/Animal';
import Location from '../../components/Location';

const Profile = props => (
  <div className="Profile">
    <div className="row">
      <div className="col">
        <Owner {...props} />
      </div>
    </div>
    <div className="row">
      <div className="col">
        <Animal {...props} />
      </div>
      <div className="col">
        <Location />
      </div>
    </div>
  </div>
);

export default Profile;
