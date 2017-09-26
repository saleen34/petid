import React from 'react';
import ReactDOM from 'react-dom';
import Owner from '../src/components/Owner';

const person = {"_id":"59ca805b9b36a20947492d3e", "id":1, "name":"Harry Holmes", "email":"test@gmail.com", "cell":"503-666-7777", "home":"206-333-4444", "address1":"1 High Street SE", "address2":"--", "city":"Seattle", "state":"WA", "zip":"98052", "country":"US"};

describe('components/Owner', () => {
  const div = document.createElement('div');

  it('renders without crashing', () => {
    ReactDOM.render(<Owner person={person} />, div);
  });
});
