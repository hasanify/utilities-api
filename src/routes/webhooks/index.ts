import { WebhooksRequest } from "@/types/webhooks";
import express, { Response } from "express";

const router = express.Router();

router.post("/", (req: WebhooksRequest, res: Response) => {
  if (req.query.origin === "docker") {
    console.log(req.body);
  }
  return res.json(200);
});

export default router;
