import mongoose, { Schema, model } from "mongoose";
import User from "../interface/user.interface";
import md5 from "md5";

const userSchema = new mongoose.Schema({
  login: {
    type: String,
    required: true,
    unique: true,
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
  registerDate: {
    type: Date,
    default: Date.now,
  },
});

// Все-таки наверно не стоит хранить пароли без salt, так если это еще и md5, правильнее было бы
// использовать пакет bcrypt и добавлять salt к паролю.
userSchema.pre("save", async function (next) {
  let user = this as User;
  user.password = md5(user.password);
  return next();
});

const UserModel = model<User>("User", userSchema);

export default UserModel;
