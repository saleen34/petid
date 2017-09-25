import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import EditInline from '../src/components/EditInline';

describe('components/EditInline', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<EditInline />, div);
  });

  it('default properties are set properly', () => {
    const div = shallow(
      <EditInline initialValue="Hello World" />
    );

    expect(div.text()).toEqual('Hello World');
  });

  it('changes to input onClick', () => {
    const div = shallow(
      <EditInline initialValue="Hello World" />
    );
    div.simulate('click');
    expect(div.find('Input').length).toEqual(1);
    expect(div.find('Input').props().initialValue).toEqual('Hello World');
  });
});
