import { query } from "express-validator";

const format = () => {
  return [
    query("type")
      .notEmpty()
      .withMessage("type is required")
      .isString()
      .withMessage("type should be string"),
    query("ts")
      .notEmpty()
      .withMessage("ts is required")
      .isNumeric()
      .withMessage("ts should be numeric")
      .toInt(),
  ];
};

export default format;
