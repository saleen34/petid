// schema.js
import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import { UserQueries, UserMutations } from './ql/UserQL';

const RootQuery = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    getAll: UserQueries.getAll,
    getOne: UserQueries.getOne,
    remove: UserMutations.remove,
    update: UserMutations.update,
    create: UserMutations.create
  })
});

const schema = new GraphQLSchema({
  query: RootQuery
});

export default schema;
