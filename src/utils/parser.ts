//const csv = require("csv-parser");
const Papa = require("papaparse");
const Stoor = require("stoor");

const { formatDate, isValidDate, getMonthNumber } = require("./methods");
interface DataPoint {
  date: String;
  amount: Number;
  ref: String;
}
interface UserFile {
  name: String;
  transactions: Array<DataPoint>;
}

var UserData = new Stoor({ namespace: "audino-data" });

export function parseFiles(files: Array<File>): Promise<Array<UserFile>> {
  return Promise.all(files.map(file => parse(file))).then(
    (res: Array<UserFile>) => {
      UserData.set("userdata", res);
      return res;
    }
  );
}

function parse(file: File): Promise<UserFile> {
  return new Promise((resolve, reject) => {
    Papa.parse(file, {
      complete: (data: any) => {
        resolve({
          name: file.name,
          transactions: parseResults(data)
        });
      }
    });
  });
}

export function parseResults(res: any): Array<DataPoint> {
  let data: Array<DataPoint> = [];
  //  Parse transactions into common shape
  res.data.map((item: any) => {
    //FNB date/amount/balance/ref
    if (item["0"] && item["1"] && item["3"]) {
      if (!isNaN(parseInt(item["1"])) && isValidDate(formatDate(item["0"]))) {
        data.push({
          date: formatDate(item["0"]),
          amount: parseInt(item["1"]),
          ref: item["3"]
        });
      }
    } else {
      //Nedbank date/ref/amount
      if (item["0"] && item["1"] && item["2"]) {
        if (!isNaN(parseInt(item["2"])) && isValidDate(formatDate(item["0"]))) {
          data.push({
            date: formatDate(item["0"]),
            amount: parseInt(item["2"]),
            ref: item["1"]
          });
        }
      }
    }
  });
  return data;
}
