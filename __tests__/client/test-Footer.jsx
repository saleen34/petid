import React from 'react';
import ReactDOM from 'react-dom';
import Footer from '../../src/client/components/Footer';

describe('components/Footer', () => {
  const div = document.createElement('div');

  it('renders without crashing', () => {
    ReactDOM.render(<Footer />, div);
  });
});
