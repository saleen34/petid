import {
  GraphQLList,
  GraphQLID
} from 'graphql';

import UserType from './UserType';
import User from './UserSchema';

export default {
  users: {
    type: new GraphQLList(UserType),
    resolve: User.getUsers
  },
  user: {
    type: UserType,
    args: {
      id: {
        type: GraphQLID
      }
    },
    resolve: User.getUserByPosition
  }
};
