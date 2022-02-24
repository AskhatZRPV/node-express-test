import { object, string } from "zod";

export const authUserSchema = object({
  body: object({
    loginOrEmail: string({
      required_error: "Login or email is required",
    }),
    password: string({
      required_error: "Password is requiered",
    }),
  }),
});
