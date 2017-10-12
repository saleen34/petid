import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { mount } from 'enzyme';
import MenuItem from '../../src/client/components/MenuItem';

describe('components/MenuItem', () => {
  const div = document.createElement('div');

  it('renders without crashing', () => {
    ReactDOM.render(<Router><MenuItem name="Warf's Forehead" link="/crinkled" /></Router>, div);
  });

  it('renders li with a link', () => {
    const r = mount(<Router><MenuItem name="Warf's Forehead" link="/crinkled" /></Router>);
    expect(r.find('MenuItem').props().name).toBe("Warf's Forehead");
    expect(r.find('MenuItem').props().link).toBe('/crinkled');
  });
});
