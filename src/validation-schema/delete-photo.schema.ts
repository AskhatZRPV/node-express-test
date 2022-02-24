import { object, string } from "zod";

export const deletePhotoSchema = object({
  body: object({
    photoId: string({
      required_error: "Photoid is required",
    }),
  }),
});
