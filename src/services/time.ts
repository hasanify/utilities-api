import moment from "moment";

export class TimeService {
  public static getRelativeTime = (ts: string) => {
    return moment(ts).fromNow(false);
  };
}
