import {
  GraphQLList,
  GraphQLID
} from 'graphql';

import UserType from './UserType';
import UserController from '../controller/UserController';

export default {
  getAll: {
    type: new GraphQLList(UserType),
    resolve: UserController.getAll
  },
  getOne: {
    type: UserType,
    args: {
      id: {
        type: GraphQLID
      }
    },
    resolve: UserController.getOne
  }
};
