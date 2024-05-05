import cc from "currency-codes";
import express, { Request, Response } from "express";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    return res.json({ available_codes: cc.codes() });
  } catch (error) {
    console.log(error);
  }
});

export default router;
