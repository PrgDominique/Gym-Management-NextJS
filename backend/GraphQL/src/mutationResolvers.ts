import { createUser } from './mutation/createUser.js'

const mutationResolvers = {
  Signup: async (_, { name, password }) => createUser(name, password),
}

export default mutationResolvers
