import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import SignUpForm from '../src/client/components/content/SignUpForm';

describe('components/SignUpForm', () => {
  const div = document.createElement('div');

  it('renders without crashing', () => {
    const onSubmit = jest.fn();
    const errors = {
      summary: '',
      username: '',
      password: ''

    };
    const user = {};

    ReactDOM.render(<SignUpForm onSubmit={onSubmit} errors={errors} user={user} />, div);
  });

  it('calls a callback on submit', () => {
    const onSubmit = jest.fn();
    const errors = {
      summary: '',
      username: '',
      password: ''

    };
    const user = {};

    const form = mount(<SignUpForm onSubmit={onSubmit} errors={errors} user={user} />);
    const button = form.find('button');
    button.simulate('submit');
    expect(onSubmit.mock.calls.length).toBe(1);
  });

  it('shows errors', () => {
    const onSubmit = jest.fn();
    const errors = {
      summary: 'There are some errors',
      username: '',
      password: ''

    };
    const user = {};

    const form = mount(<SignUpForm onSubmit={onSubmit} errors={errors} user={user} />);
    expect(form.find('.error-message').length).toBe(1);
  });
});
