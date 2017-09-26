import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from '../src/components/Nav';
import menus from '../menus';

describe('components/Nav', () => {
  const div = document.createElement('div');

  it('renders without crashing', () => {
    ReactDOM.render(<Router><Nav menus={menus} /></Router>, div);
  });
});
