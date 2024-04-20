import TimeController from "@/controllers/time";
import { attachHandler } from "@/middlewares/validators";
import formatValidator from "@/middlewares/validators/time/format";
import express from "express";

const router = express.Router();

router.get("/", attachHandler(formatValidator()), TimeController.format);

export default router;
