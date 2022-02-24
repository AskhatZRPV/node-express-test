import { object, string } from "zod";

export const deleteAlbumSchema = object({
  body: object({
    albumid: string({
      required_error: "albumid is required",
    }),
  }),
});
