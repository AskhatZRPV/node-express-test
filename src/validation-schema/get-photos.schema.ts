import { number, object, string } from "zod";

export const getPhotosSchema = object({
  body: object({
    ownerid: string().optional(),
    page: number({
      required_error: "albumid is required",
    }),
    maxcount: number({
      required_error: "m",
    }),
  }),
});
