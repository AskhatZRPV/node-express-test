import config from "config";
import express, { Express } from "express";
import logger from "./util/logger";
import connect from "./util/dbconnect";
import routes from "./route/route";

const port: String = config.get<String>("port");
const app: Express = express();

app.use(express.json());

app.listen(port, async () => {
  logger.info(`Server started on http://localhost:${port}`);
  await connect();
  routes(app);
});
