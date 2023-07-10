import { createUser } from './mutation/createUser';

const mutationResolvers = {
  createUserName: async (_, { name, age }) => createUser(name, age),
}

export default mutationResolvers