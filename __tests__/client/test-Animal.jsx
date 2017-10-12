import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import Animal from '../../src/client/components/Animal';

describe('components/Animal', () => {
  const div = document.createElement('div');
  const animal = {
    _id: '59ca805b9b36a20947492d3d',
    id: 2,
    name: 'Bentley',
    gender: 'Male',
    breed: 'Poodle',
    color: 'White/Gray',
    birthdate: '06/15/1993',
    weight: '10lbs',
    notes: 'Loves stuffies',
    image: 'images/fender.jpg'
  };

  it('renders without crashing', () => {
    ReactDOM.render(<Animal animal={animal} />, div);
  });

  it('gets props', () => {
    const a = mount(<Animal animal={animal} />, div);
    expect(a.props().animal.id).toBe(2);
    expect(a.props().animal.name).toBe('Bentley');
    expect(a.props().animal.gender).toBe('Male');
    expect(a.props().animal.breed).toBe('Poodle');
    expect(a.props().animal.color).toBe('White/Gray');
    expect(a.props().animal.birthdate).toBe('06/15/1993');
    expect(a.props().animal.weight).toBe('10lbs');
    expect(a.props().animal.notes).toBe('Loves stuffies');
    expect(a.props().animal.image).toBe('images/fender.jpg');
  });
});
