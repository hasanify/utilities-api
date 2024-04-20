import { Request } from "express";

export interface FormatRequest extends Request {
  query: {
    ts: string;
    type: "relative";
  };
}
