import { Request } from "express";

export interface WebhooksRequest extends Request {
  query: {
    origin: "docker";
  };
}
