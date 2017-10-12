import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string
};

const defaultProps = {
  src: 'images/profile.png',
  alt: ''
};

const Image = ({ src, alt }) => <img className="Image" src={src} alt={alt} />;

Image.propTypes = propTypes;
Image.defaultProps = defaultProps;

export default Image;
