import userSchema from "../Schema/userSchema.js";

export const createUser = (userObject) => {
  return userSchema(userObject).save();
};
