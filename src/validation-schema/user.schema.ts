import { object, string } from "zod";

export const createUserSchema = object({
  body: object({
    login: string({
      required_error: "Name is required",
    }),

    email: string({
      required_error: "Email is required",
    }).email("Not a valid email"),

    password: string({
      required_error: "Password is requiered",
    }).min(6, "Password too short - should be 6 chars minimum"),
  }),
});
