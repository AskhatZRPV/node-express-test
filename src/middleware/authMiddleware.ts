import { Request, Response, NextFunction } from "express";
import { verifyJwt } from "../util/jwt.utils";

function authenticateToken(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const authHeader: string | undefined = req.headers["authorization"];
  if (typeof authHeader === 'undefined') {
    res.sendStatus(409).send("No token provided");
  }
  try {
    const jwtToken = verifyJwt(authHeader);
    if (jwtToken.valid && !jwtToken.expired) {
      req.body.user_id = jwtToken.decoded._id;
      next();
    } else {
      res.send("Token isn't valid");
    }
  } catch (error) {
    res.sendStatus(400).send(error);
  }
}

export default authenticateToken;
