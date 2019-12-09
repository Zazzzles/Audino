//const csv = require("csv-parser");
const Papa = require("papaparse");

interface DataPoint {
  date: String;
  amount: Number;
  ref: String;
}
export function parseFile(file: any, onComplete: any) {
  console.log(file);
  Papa.parse(file, { complete: onComplete });
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

export function getMonths(data: Array<DataPoint>) {
  let months: Array<any> = [];
  data.forEach(item => {
    let month = parseInt(item.date.split("/")[1]);
    months.includes(month) || months.push(month);
  });
  return months;
}

export function sortByMonth(data: Array<any>) {
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

export function isolateDate(data: Array<any>) {
  return data.map(item => item.date);
}

export function isolateAmount(data: Array<any>) {
  return data.map(item => item.amount);
}
