import { UserName } from './model.js';
import { createUser } from './mutation/createUser.js';
// Resolver map
const resolvers = {
    Query: {
        username: async () => await UserName.find(),
    },
    Mutation: {
        createUserName: async (_, { name, age }) => createUser(name, age),
    },
};
export default resolvers;
