import {
  GraphQLList,
  GraphQLID,
  GraphQLNonNull
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
      userId: {
        name: 'userId',
        type: new GraphQLNonNull(GraphQLID)
      }
    },
    resolve: UserController.getOne
  }
};
