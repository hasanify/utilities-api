import { Application } from "express";
import fs from "fs";
import path from "path";

const endsWith = ".js";
const routesPath = __dirname;

const attachRoutes = async (app: Application) => {
  const utilities = fs
    .readdirSync(routesPath)
    .filter((type) => fs.lstatSync(path.join(routesPath, type)).isDirectory());

  utilities.forEach((utility) => {
    const paths = fs.readdirSync(path.join(routesPath, utility)).map((p) => {
      if (p.endsWith(endsWith)) return p.replace(endsWith, "").toLowerCase();
    });

    paths.forEach((p) => {
      const route = `/${utility}/${p}`;
      const module = path.join(__dirname, route);
      const router = require(module).default;

      app.use(route, router);
      const methods = router.stack.map((layer: any) => {
        if (layer.route) {
          return Object.keys(layer.route.methods)[0];
        }
      });

      console.log(
        `[ROUTE] : using route - ${route} - [METHODS] - [${methods.join(", ")}]`
      );
    });
  });
};

export default attachRoutes;
