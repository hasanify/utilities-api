import { formatDistanceToNow } from "date-fns";

export class TimeService {
  public static getRelativeTime = (ms: string) => {
    return formatDistanceToNow(new Date(ms));
  };
}
