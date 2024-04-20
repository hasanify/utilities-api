import { NextFunction, Request, Response } from "express";

const sanitize = (req: Request, res: Response, next: NextFunction) => {
  function convert(obj: any) {
    for (const key in obj) {
      if (typeof obj[key] === "string") {
        if (key !== "unit" && key !== "timestamp")
          obj[key] = obj[key].toLowerCase().trim();
      } else if (typeof obj[key] === "object") {
        convert(obj[key]);
      }
    }
  }

  if (req.body) convert(req.body);
  if (req.params) convert(req.params);

  next();
};

export default sanitize;
