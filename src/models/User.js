import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.isValidPassword = async function (password, callback) {
  const compare = await bcrypt.compare(
    password,
    this.password,
    function (error, same) {
      if (error) {
        callback(error);
      }else {
        callback(error, same);
      }
    }
  );

  return compare;
};

const User = mongoose.model("User", userSchema);

export default User;
