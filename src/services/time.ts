import { formatDistanceToNow } from "date-fns";

export class TimeService {
  public static getRelativeTime = (ms: number) => {
    return formatDistanceToNow(new Date(ms));
  };
}
