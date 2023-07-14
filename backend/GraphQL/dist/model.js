import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    name: String,
    password: String,
});
// const userNameSchema = new mongoose.Schema({
//   name: String,
//   age: Number,
// })
// export const User = mongoose.model('kitten', userNameSchema)
export const Users = mongoose.model('user', userSchema);
// export { User, UserName }
