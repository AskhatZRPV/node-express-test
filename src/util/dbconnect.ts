import mongoose from "mongoose";
import config from "config";
import logger from "./logger";

async function connect(): Promise<any> {
  const mongoURi = config.get<string>("mongoUri");
  return await mongoose
    .connect(mongoURi)
    .then(() => logger.info(`Succesfully connected to the MongoDB`))
    .catch((e) => {
      logger.error("Could not connect to DB");
      process.exit(1);
    });
}

export default connect;
