import { Request } from "express";

export interface CurrencyRequest extends Request {
  query: {
    from: string;
    to: string;
  };
}
