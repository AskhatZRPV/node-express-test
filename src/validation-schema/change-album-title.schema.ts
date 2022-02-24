import { object, string } from "zod";

export const changeAlbumTitleSchema = object({
  body: object({
    albumid: string({
      required_error: "albumid is required",
    }),
    new_album_name: string({
      required_error: "albumid is required",
    }),
  }),
});
