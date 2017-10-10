import {
  GraphQLList,
  GraphQLID
} from 'graphql';

import UserType from './UserType';
import UserController from '../controller/UserController';

export default {
  users: {
    type: new GraphQLList(UserType),
    resolve: UserController.getAll
  },
  user: {
    type: UserType,
    args: {
      id: {
        type: GraphQLID
      }
    },
    resolve: UserController.getOne
  }
};
