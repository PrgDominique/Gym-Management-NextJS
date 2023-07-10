import { createUser } from './mutation/createUser.js';
const mutationResolvers = {
    createUserName: async (_, { name, age }) => createUser(name, age),
};
export default mutationResolvers;
