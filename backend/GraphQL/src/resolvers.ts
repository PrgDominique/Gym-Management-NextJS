import { UserName } from './model.js'
import mutationResolvers from './mutationResolvers.js'
import queryResolvers from './queryResolvers.js'

// Resolver map

const resolvers = {
  Query: queryResolvers,
  Mutation: mutationResolvers,
}

export default resolvers
