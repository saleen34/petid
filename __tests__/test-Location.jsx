import React from 'react';
import ReactDOM from 'react-dom';
import Location from '../src/components/Location';

describe('components/Location', () => {
  const div = document.createElement('div');

  it('renders without crashing', () => {
    ReactDOM.render(<Location />, div);
  });
});
