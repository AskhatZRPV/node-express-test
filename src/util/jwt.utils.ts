import jwt, { JwtPayload } from "jsonwebtoken";
import config from "config";

const privateKey = config.get<string>("privateKey");
const publicKey = config.get<string>("publicKey");

export function signJwt(
  object: Object,
  options?: jwt.SignOptions | undefined
): string {
  return jwt.sign(object, privateKey, { ...options, algorithm: "RS256" });
}

export function verifyJwt(token: string | undefined): JwtPayload {
  if (!token) {
    throw new Error("KEK");
  }
  try {
    const decoded = jwt.verify(token, publicKey);
    return {
      valid: true,
      expired: false,
      decoded,
    };
  } catch (err: any) {
    return {
      valid: false,
      expired: err.message === "jwt expired",
      decoded: null,
    };
  }
}
