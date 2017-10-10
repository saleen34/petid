import React from 'react';

class Location extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      webpage: 'https://aidtag.com/axdi',
      qr: '--'
    };
  }

  render () {
    return (
      <div className="profile-section rounded container-fluid">
        <div className="row text-center">
          <div className="col"><h4>My NFC & QR Tag Info</h4></div>
        </div>
        <div className="row">
          <div className="col">My WebPage</div>
          <div className="col"><strong>{this.state.webpage}</strong></div>
        </div>
        <div className="row">
          <div className="col">My QR Code</div>
          <div className="col"><strong>{this.state.qr}</strong></div>
        </div>
      </div>
    );
  }
}

export default Location;
