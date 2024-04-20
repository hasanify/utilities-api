import { TimeService } from "@/services/time";
import { NextFunction, Request, Response } from "express";

class TimeController {
  static async format(req: Request, res: Response, next: NextFunction) {
    try {
      const ts = req.query.ts as unknown as number;
      const relative = TimeService.getRelativeTime(ts);
      res.json({ relative });
    } catch (error) {
      next(error);
    }
  }
}

export default TimeController;
