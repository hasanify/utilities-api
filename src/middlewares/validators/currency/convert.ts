import cc from "currency-codes";
import { query } from "express-validator";

const convert = () => {
  return [
    query("from")
      .notEmpty()
      .withMessage("from is required")
      .isString()
      .withMessage("from should be string")
      .toUpperCase()
      .custom((value) => {
        const code = cc.code(value);
        if (!code) throw new Error(`invalid code ${value}`);
        return true;
      }),
    query("to")
      .notEmpty()
      .withMessage("to is required")
      .isString()
      .withMessage("to should be string")
      .toUpperCase()
      .custom((value) => {
        const code = cc.code(value);
        if (!code) throw new Error(`invalid code ${value}`);
        return true;
      }),
  ];
};

export default convert;
