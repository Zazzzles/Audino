//const csv = require("csv-parser");
import Papa from "papaparse";

export function parseFile(file, onComplete) {
  Papa.parse(file, { complete: onComplete });
}

export function parseResults(res) {
  let data = [];
  res.data.map(item => {
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

export function getMonths(data) {
  let months = [];
  data.forEach(item => {
    let month = parseInt(item.date.split("/")[1]);
    months.includes(month) || months.push(month);
  });
  return months;
}

export function sortByMonth(data) {
  let sorted = {};
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

export function isolateDate(data) {
  return data.map(item => item.date);
}

export function isolateAmount(data) {
  return data.map(item => item.amount);
}
