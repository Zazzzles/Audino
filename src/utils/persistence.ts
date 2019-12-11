const Stoor = require("stoor");

var UserData = new Stoor({ namespace: "audino-data" });

interface DataPoint {
  date: String;
  amount: Number;
  ref: String;
}
interface UserFile {
  name: String;
  transactions: Array<DataPoint>;
}

export function getFiles(): Array<UserFile> {
  return UserData.get("userdata");
}
