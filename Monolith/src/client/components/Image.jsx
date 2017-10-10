import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

const Image = ({ src, alt }) => <img className="Image" src={src} alt={alt} />;

Image.defaultProps = {
  src: 'images/profile.png'
};

Image.propTypes = propTypes;

export default Image;
