import AuthUser from "../interface/login.interface";
import md5 from "md5";
import User from "../interface/user.interface";
import UserModel from "../model/user.model";
import { omit } from "lodash";

export async function authorizeUser(
  input: AuthUser
): Promise<Omit<User, "password" | "email" | "registerDate">> {
  input.password = md5(input.password);
  if (validateEmail(input.loginOrEmail)) {
    try {
      const user = await UserModel.findOne({
        email: input.loginOrEmail,
        password: input.password,
      });
      if (!user) {
        throw new Error("Wrong password or user doesn't exist");
      }
      return omit(user.toJSON(), "password", "email", "registerDate");
    } catch (error) {
      throw error;
    }
  } else {
    try {
      const user = await UserModel.findOne({
        login: input.loginOrEmail,
        password: input.password,
      });
      if (!user) {
        throw new Error("Wrong password or user doesn't exist");
      }
      return omit(user.toJSON(), "password", "email", "registerDate");
    } catch (error) {
      throw error;
    }
  }
}

function validateEmail(email: string): boolean {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}
