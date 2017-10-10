import {
  GraphQLID
  } from 'graphql';

import UserType from './UserType';
import UserController from '../controller/UserController';

// remove id from getFields for create only
const { id, ...createFields } = UserType.getFields();

export default {
  remove: {
    type: UserType,
    args: {
      id: {
        type: GraphQLID
      }
    },
    resolve: UserController.remove
  },
  update: {
    type: UserType,
    args: UserType.getFields(),
    resolve: UserController.update
  },
  create: {
    type: UserType,
    args: createFields,
    resolve: UserController.create
  }
};
