// schema.js
import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import { UserQueries } from './ql/UserQL';

const RootQuery = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    user: UserQueries.user,
    users: UserQueries.users
  })
});

const schema = new GraphQLSchema({
  query: RootQuery
});

export default schema;
