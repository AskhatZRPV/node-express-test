import { Request, Response } from "express";
import { createUser } from "../service/user.service";
import logger from "../util/logger";

export async function createUserHandler(req: Request, res: Response) {
  try {
    const user = await createUser(req.body);
    res.send(user);
  } catch (err: any) {
    logger.error(err.message);
    if (err) res.status(409).send(err.message);
  }
}
