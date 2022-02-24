import User from "../interface/user.interface";
import UserModel from "../model/user.model";
import logger from "../util/logger";
import { omit } from "lodash";

export async function createUser(input: User): Promise<Omit<User, "password">> {
  const { login, email } = input;
  const loginExists = await UserModel.findOne({ login });
  const emailExists = await UserModel.findOne({ email });
  if (loginExists && emailExists) {
    throw new Error("Email and login already used");
  } else if (loginExists) {
    throw new Error("login already used");
  } else if (emailExists) {
    throw new Error("Email already used");
  }
  try {
    const user = await UserModel.create(input);
    logger.info("User successfully created account");
    return omit(user.toJSON(), "password");
  } catch (error) {
    throw error;
  }
}
