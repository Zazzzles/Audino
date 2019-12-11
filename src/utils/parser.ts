//const csv = require("csv-parser");
const Papa = require("papaparse");
const Stoor = require("stoor");
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
      complete: (data: any) =>
        resolve({
          name: file.name,
          transactions: parseResults(data)
        })
    });
  });
}

export function parseResults(res: any): Array<DataPoint> {
  let data: Array<DataPoint> = [];
  res.data.map((item: any) => {
    if (item["0"] && item["1"] && item["3"]) {
      if (!isNaN(parseInt(item["1"]))) {
        data.push({
          date: item["0"],
          amount: parseInt(item["1"]),
          ref: item["3"]
        });
      }
    }
  });
  return data;
}

export function getMonths(data: Array<DataPoint>): Array<Number> {
  let months: Array<any> = [];
  data.forEach(item => {
    let month = parseInt(item.date.split("/")[1]);
    months.includes(month) || months.push(month);
  });
  return months;
}

export function sortByMonth(data: Array<any>): Array<Array<DataPoint>> {
  let sorted: any = {};
  data.forEach(item => {
    let month = parseInt(item.date.split("/")[1]);
    if (sorted[month]) {
      sorted[month].push(item);
    } else {
      sorted[month] = [item];
    }
  });
  return sorted;
}

export function isolateDate(data: Array<any>): Array<String> {
  return data.map(item => item.date);
}

export function isolateAmount(data: Array<any>): Array<Number> {
  return data.map(item => item.amount);
}
