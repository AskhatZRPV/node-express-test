import { Express, Request, Response } from "express";
import {
  changeAlbumTitleHandler,
  deleteAlbumHandler,
} from "../controller/album.controller";
import { authUserHandler } from "../controller/auth.controller";
import {
  deletePhotoHandler,
  getPhotosHandler,
  loadPhotosHandler,
} from "../controller/photo.controller";
import { createUserHandler } from "../controller/user.controller";
import authenticateToken from "../middleware/authMiddleware";
import validateResource from "../middleware/validateResource";
import { changeAlbumTitleSchema } from "../validation-schema/change-album-title.schema";
import { deleteAlbumSchema } from "../validation-schema/delete-album.schma";
import { deletePhotoSchema } from "../validation-schema/delete-photo.schema";
import { getPhotosSchema } from "../validation-schema/get-photos.schema";
import { authUserSchema } from "../validation-schema/login.schema";
import { createUserSchema } from "../validation-schema/user.schema";

function routes(app: Express): void {
  app.post("/register", validateResource(createUserSchema), createUserHandler);
  app.post("/login", validateResource(authUserSchema), authUserHandler);
  app.post("/load-photos", authenticateToken, loadPhotosHandler);
  app.get(
    "/get-photos",
    authenticateToken,
    validateResource(getPhotosSchema),
    getPhotosHandler
  );
  app.delete(
    "/delete-photo",
    authenticateToken,
    validateResource(deletePhotoSchema),
    deletePhotoHandler
  );
  app.delete(
    "/delete-album",
    authenticateToken,
    validateResource(deleteAlbumSchema),
    deleteAlbumHandler
  );
  app.patch(
    "/change-album-title",
    authenticateToken,
    validateResource(changeAlbumTitleSchema),
    changeAlbumTitleHandler
  );
}

export default routes;
