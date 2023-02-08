import User from "../models/user.js";

export const registerService = async (name, email, password) => {
  const user = await User.create({ name, email, password });

  return user;
};

export const loginService = async (email, password) => {
  /* fazer login */
  
};
