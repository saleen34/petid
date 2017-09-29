import React from 'react';
import ReactDOM from 'react-dom';
import SignUp from '../../src/client/components/content/SignUp';

describe('components/SignUp', () => {
  const div = document.createElement('div');

  it('renders without crashing', () => {
    ReactDOM.render(<SignUp />, div);
  });
});
