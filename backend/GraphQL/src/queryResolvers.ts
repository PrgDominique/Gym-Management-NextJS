import { UserName } from './model'

const queryResolvers = {
  username: async () => await UserName.find(),
}

export default queryResolvers
