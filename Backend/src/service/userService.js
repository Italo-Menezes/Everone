import User from "../models/User.js";
import jwt from 'jsonwebtoken';


export const registerService = async (name, email, password) => {
  const user = await User.create({ name, email, password });

  return user;
};

export const loginService = async (email) => User.findOne({ email: email }).select("+password")


export const generateToken =  (id) => jwt.sign({id: id }, process.env.JWT_TOKEN, {expiresIn: 86400}) 

export const findByIdUserService = (id) => User.findById(id);
