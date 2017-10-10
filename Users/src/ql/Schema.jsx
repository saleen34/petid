import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import UserQueries from './UserQueries';
import UserMutations from './UserMutations';

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
