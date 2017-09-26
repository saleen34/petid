import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { mount } from 'enzyme';
import MenuItem from '../src/client/components/MenuItem';

describe('components/MenuItem', () => {
  const div = document.createElement('div');

  it('renders without crashing', () => {
    ReactDOM.render(<Router><MenuItem name='Warf Forehead' /></Router>, div);
  });

  it('renders li with a link', () => {
    const r = mount(<Router><MenuItem name='Warf Forehead' /></Router>);
    expect(r.find('MenuItem').props().name).toBe('Warf Forehead');
  });
});
