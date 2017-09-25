import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Input from '../src/components/Input';

describe('components/Input', () => {
  const div = document.createElement('div');

  it('renders without crashing', () => {
    ReactDOM.render(<Input />, div);
  });

  it('has a default value', () => {
    const d = shallow(<Input initialValue="Jean-Luc" />, div);
    expect(d.props().value).toBe('Jean-Luc');
  });
});
