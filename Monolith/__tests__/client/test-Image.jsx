import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Image from '../../src/client/components/Image';

describe('components/Image', () => {
  const div = document.createElement('div');

  it('renders without crashing', () => {
    ReactDOM.render(<Image src="images/profile.png" alt="Fender" />, div);
  });

  it('should have its props set', () => {
    const i = shallow(<Image src="images/profile.png" alt="Fender" />, div);
    expect(i.props().src).toBe('images/profile.png');
    expect(i.props().alt).toBe('Fender');
  });
});
