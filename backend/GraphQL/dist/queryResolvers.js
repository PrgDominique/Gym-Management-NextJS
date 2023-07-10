import { UserName } from './model.js';
const queryResolvers = {
    username: async () => await UserName.find(),
};
export default queryResolvers;
