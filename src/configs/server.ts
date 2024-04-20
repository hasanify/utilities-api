import sanitize from "@/middlewares/sanitize";
import attachRoutes from "@/routes";
import express, {
  Application,
  NextFunction,
  Request,
  Response,
  json,
} from "express";

const createServer = async () => {
  const app: Application = express();
  app.use(json({ limit: "5mb" }));
  app.use(sanitize);
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  await attachRoutes(app);

  app.use((error: any, req: Request, res: Response, next: NextFunction) => {
    console.log(error);
    return res.sendStatus(500);
  });

  return app;
};

export default createServer;
