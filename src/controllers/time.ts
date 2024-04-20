import { TimeService } from "@/services/time";
import { FormatRequest } from "@/types/time";
import { NextFunction, Response } from "express";

class TimeController {
  static async format(req: FormatRequest, res: Response, next: NextFunction) {
    try {
      const { ts, type } = req.query;
      const formatted = TimeService.getRelativeTime(ts);

      res.json({ formatted });
    } catch (error) {
      next(error);
    }
  }
}

export default TimeController;
