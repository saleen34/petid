import { expect } from 'chai';
import UserType from '../../src/ql/UserType';

describe('User', () => {
  it('Should have an id field of type String', () => {
    expect(UserType.getFields()).to.have.property('id');
  });

  it('Should have an username field of type String', () => {
    expect(UserType.getFields()).to.have.property('username');
  });

  it('Should have an email field of type String', () => {
    expect(UserType.getFields()).to.have.property('email');
  });

  it('Should have an name field of type String', () => {
    expect(UserType.getFields()).to.have.property('name');
  });

  it('Should have an cell field of type String', () => {
    expect(UserType.getFields()).to.have.property('cell');
  });

  it('Should have an home field of type String', () => {
    expect(UserType.getFields()).to.have.property('home');
  });

  it('Should have an address1 field of type String', () => {
    expect(UserType.getFields()).to.have.property('address1');
  });

  it('Should have an address2 field of type String', () => {
    expect(UserType.getFields()).to.have.property('address2');
  });

  it('Should have an city field of type String', () => {
    expect(UserType.getFields()).to.have.property('city');
  });

  it('Should have an state field of type String', () => {
    expect(UserType.getFields()).to.have.property('state');
  });

  it('Should have an zip field of type String', () => {
    expect(UserType.getFields()).to.have.property('zip');
  });

  it('Should have an country field of type String', () => {
    expect(UserType.getFields()).to.have.property('country');
  });
});
