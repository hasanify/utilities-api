import { extractText } from "@/lib/utils";
import { attachHandler } from "@/middlewares/validators";
import convert from "@/middlewares/validators/currency/convert";
import { CurrencyRequest } from "@/types/currency";
import * as cheerio from "cheerio";
import express, { Response } from "express";
const fetch = require("node-fetch2");

const router = express.Router();

router.get(
  "/",
  attachHandler(convert()),
  async (req: CurrencyRequest, res: Response) => {
    try {
      const { from, to } = req.query;

      const response = await fetch(
        `https://www.xe.com/currencyconverter/convert/?Amount=1&From=${from}&To=${to}`
      );

      const html = await response.text();
      const $ = cheerio.load(html);
      const paragraphs = $("p");
      const rate = parseFloat(
        extractText($, paragraphs)[2].replace(/[^0-9.]/g, "")
      );
      return res.json({ rate });
    } catch (error) {
      console.log(error);
    }
  }
);

export default router;
