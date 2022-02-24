import config from "config";
import { Request, Response } from "express";
import { authorizeUser } from "../service/auth.service";
import { signJwt, verifyJwt } from "../util/jwt.utils";
import logger from "../util/logger";

export async function authUserHandler(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const user = await authorizeUser(req.body);
    const accessTokenTtl = config.get<string>("accessTokenTtl");
    res.send(signJwt(user, { expiresIn: accessTokenTtl }));
  } catch (err: any) {
    logger.error(err.message);
    if (err) res.status(409).send(err.message);
  }
}
