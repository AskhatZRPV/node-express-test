import axios from "axios";
import { Request, Response } from "express";
import {
  deletePhotos,
  getPhotos,
  loadPhotosService,
} from "../service/photo.service";
import logger from "../util/logger";

export async function loadPhotosHandler(
  req: Request,
  res: Response
): Promise<void> {
  const user: string = req.body.user_id;
  try {
    axios
      .get("http://jsonplaceholder.typicode.com/photos")
      .then(async ({ data }) => {
        await loadPhotosService(data, user);
      });
    res.sendStatus(200);
  } catch (err: any) {
    logger.error(err.message);
    if (err) res.status(409).send(err.message);
  }
}

export async function getPhotosHandler(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const owner: string = req.body.ownerid;
    const page: number = req.body.page;
    const maxcount: number = req.body.maxcount;
    const result = await getPhotos(maxcount, page, owner);
    res.send(result);
  } catch (error) {
    logger.error(error);
    res.sendStatus(400).send(error);
  }
}

export async function deletePhotoHandler(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const a = req.body.photoId;
    const array = a.split(",");
    const user: string = req.body["user_id"];
    await deletePhotos(array, user);
    res.sendStatus(200);
  } catch (error) {
    logger.error(error);
    res.sendStatus(400).send(error);
  }
}
