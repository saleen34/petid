import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLID
  } from 'graphql';

export default new GraphQLObjectType({
  name: 'User',
  description: 'A User',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    username: {
      type: new GraphQLNonNull(GraphQLString)
    },
    email: {
      type: new GraphQLNonNull(GraphQLString)
    },
    name: {
      type: new GraphQLNonNull(GraphQLString)
    },
    cell: {
      type: new GraphQLNonNull(GraphQLString)
    },
    home: {
      type: GraphQLString
    },
    address1: {
      type: new GraphQLNonNull(GraphQLString)
    },
    address2: {
      type: GraphQLString
    },
    city: {
      type: new GraphQLNonNull(GraphQLString)
    },
    state: {
      type: new GraphQLNonNull(GraphQLString)
    },
    zip: {
      type: new GraphQLNonNull(GraphQLString)
    },
    country: {
      type: GraphQLString
    }
  })
});
