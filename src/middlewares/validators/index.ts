import { NextFunction, Request, Response } from "express";
import { ValidationChain, validationResult } from "express-validator";

const handleValidationErrors = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    return res.status(400).json({
      code: 400,
      message: errors.array()[0].msg,
    });
  }
  next();
};

export const attachHandler = (handler: ValidationChain[]) => {
  return [...handler, handleValidationErrors] as ValidationChain[];
};
