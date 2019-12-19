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
      console.log(res);
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

//  Convert dates to use / notation
function formatDate(date: String): String {
  if (date.includes("-")) {
    date = date.replace(/-/g, "/");
    const split = date.split("/");
    if (split[2].length === 4) {
      date = `${split[2]}/${split[1]}/${split[0]}`;
    }
  }
  return date;
}

//  Check if date is valid
function isValidDate(date: String): Boolean {
  return date.includes("/");
}

export function parseResults(res: any): Array<DataPoint> {
  let data: Array<DataPoint> = [];
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
  //console.log(data);
  // data.forEach((item) => {

  // })
  return data;
}

function getMonthNumber(date: String): number {
  return parseInt(date.split("/")[1]);
}

export function getMonths(data: Array<DataPoint>): Array<Number> {
  let months: Array<any> = [];
  data.forEach(item => {
    let month = getMonthNumber(item.date);
    months.includes(month) || months.push(month);
  });
  return months.reverse();
}

export function sortByMonth(data: Array<any>): Array<Array<DataPoint>> {
  let sorted: any = {};
  data.forEach(item => {
    let month = getMonthNumber(item.date);
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
