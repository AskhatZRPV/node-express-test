import { Request, Response } from "express";
import { deleteAlbums, changeAlbumTitle } from "../service/album.service";
import logger from "../util/logger";

export async function deleteAlbumHandler(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const albumId = req.body.albumid;
    const albumIdArray = albumId.split(",");
    const user: string = req.body.user_id;
    await deleteAlbums(albumIdArray, user);
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(400).send(error);
  }
}

export async function changeAlbumTitleHandler(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const albumId = req.body.albumid;
    const albumName = req.body.new_album_name;
    const user: string = req.body.user_id;
    await changeAlbumTitle(albumId, albumName, user);
    res.sendStatus(200);
  } catch (error) {
    logger.error(error);
    res.sendStatus(400).send(error);
  }
}
