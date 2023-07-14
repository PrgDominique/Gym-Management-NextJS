import { Users } from '../model.js';
export const createUser = async (name, password) => {
    try {
        const username = await new Users({ name, password });
        await username.save();
        return username;
    }
    catch (error) {
        throw new Error('Failed to create user.');
    }
};
