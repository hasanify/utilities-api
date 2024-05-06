import cc from "currency-codes";
import { NextFunction, Request, Response } from "express";
import { ValidationChain, validationResult } from "express-validator";

const handleValidationErrors = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const msg: string = errors.array()[0].msg;
    return res.status(400).json({
      code: 400,
      message: msg,
      available_codes: msg.includes("invalid code") ? cc.codes() : undefined,
    });
  }
  next();
};

export const attachHandler = (handler: ValidationChain[]) => {
  return [...handler, handleValidationErrors] as ValidationChain[];
};
