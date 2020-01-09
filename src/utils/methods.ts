const stringSimilarity = require("string-similarity");

interface DataPoint {
  date: string;
  amount: number;
  ref: string;
}

interface TotalPoint {
  date: String;
  transactions: Number;
  amount: Number;
}

interface ReferencePoint {
  name: String;
  count: Number;
  amount: Number;
}

interface Buffer {
  [key: string]: [DataPoint];
}

export function addAmounts(data: [DataPoint]): Array<TotalPoint> {
  let buffer: Buffer = {};
  let sorted: Array<TotalPoint> = [];
  //    Buffer via dates
  data.forEach((item: DataPoint) => {
    const { date } = item;
    if (buffer[date]) {
      buffer[date].push(item);
    } else {
      buffer[date] = [item];
    }
  });
  //    Add amounts and count transactions
  Object.keys(buffer).forEach(key => {
    let total: number = 0;
    buffer[key].forEach(item => {
      const { amount } = item;
      total = total + amount;
    });
    sorted.push({
      date: key,
      transactions: buffer[key].length,
      amount: total
    });
  });

  return sorted;
}

export function formatDate(date: String): String {
  //  Expected format is yyyy/mm/dd
  let split: Array<String> = [];
  if (date.includes("-")) {
    split = date.split("-");
  }
  if (date.includes("/")) {
    split = date.split("/");
  }
  if (split.length !== 0) {
    //yyyy/mm/dd
    if (split[0].length === 4) {
      date = `${split[0]}/${split[1]}/${split[2]}`;
    }
    //dd/mm/yyyy
    if (split[2].length === 4) {
      date = `${split[2]}/${split[1]}/${split[0]}`;
    }
    //mm/dd/yy
    if (split[0].length !== 4 && split[2].length !== 4) {
      date = `20${split[2]}/${split[0]}/${split[1]}`;
    }
  }
  return date;
}

//  Check if date is valid yyyy/mm/dd
export function isValidDate(date: String): Boolean {
  return date.includes("/");
}

export function getMonthNumber(date: String): number {
  return parseInt(date.split("/")[1]);
}

//  Get array of dates from array of datapoints
export function isolateDate(data: Array<DataPoint>): Array<String> {
  return data.map(item => item.date);
}

//  Get array of amounts from array of datapoints
export function isolateAmount(data: Array<DataPoint>): Array<Number> {
  return data.map(item => item.amount);
}

export function isolateReference(data: Array<ReferencePoint>): Array<String> {
  return data.map(item => item.name);
}

export function isolateCount(data: Array<ReferencePoint>): Array<Number> {
  return data.map(item => item.count);
}

//  Get array of transaction amounts from array of totalPoints
export function isolateTransactionCounts(
  data: Array<TotalPoint>
): Array<Number> {
  return data.map(item => item.transactions);
}

//  Get months numbers from collection of datapoints
export function getMonths(data: Array<DataPoint>): Array<Number> {
  let months: Array<any> = [];
  data.forEach(item => {
    let month = getMonthNumber(item.date);
    months.includes(month) || months.push(month);
  });
  return months.reverse();
}

//  FIXME: Possibly rather go for using month names as object keys
//  Return sorted datapoints by month
export function sortByMonth(
  data: Array<DataPoint>
): { month: Array<DataPoint> } {
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

//  Map data to array of colors
export function mapToColor(
  color: String,
  data: Array<DataPoint>
): Array<String> {
  return data.map(_ => color);
}

//  Determines reference counts by comparing similarity of reference names
export function getReferences(data: Array<DataPoint>): Array<ReferencePoint> {
  let references: any = {};
  data.forEach(item => {
    const { ref, amount } = item;
    if (Object.keys(references).length === 0) {
      references[ref] = {
        amount,
        count: 1
      };
    } else {
      Object.keys(references).forEach(key => {
        if (
          stringSimilarity.compareTwoStrings(
            key.substring(0, 10),
            ref.substring(0, 10)
          ) > 0.6
        ) {
          if (references[ref]) {
            references[ref] = {
              amount: references[ref].amount + amount,
              count: references[ref].count + 1
            };
          } else {
            references[ref] = {
              amount,
              count: 1
            };
          }
        } else {
          references[ref] = {
            amount,
            count: 1
          };
        }
      });
    }
  });

  let formatted = Object.keys(references).map(key => {
    return {
      name: key,
      amount: references[key].amount,
      count: references[key].count
    };
  });
  return formatted;
}

export function getReferencesByMonth(
  data: Array<DataPoint>
): { month: Array<ReferencePoint> } {
  let sorted: any = sortByMonth(data);
  Object.keys(sorted).forEach(key => {
    sorted[key] = getReferences(sorted[key]);
  });
  return sorted;
}

//  FIXME: Add amounts if reference occurs more than once in same month
export function getRecurringReferences(data: Array<DataPoint>): Array<Object> {
  let sorted: any = getReferencesByMonth(data);
  let filtered: any = {};
  //Remove items which occur more than once per month
  Object.keys(sorted).forEach(key => {
    filtered[key] = sorted[key].filter((item: any) => {
      return item.count === 1;
    });
  });
  // Count how many times items occur accross all months
  let counts: any = {};
  Object.keys(filtered).forEach(key => {
    filtered[key].forEach((item: any) => {
      const { name } = item;
      if (counts[name]) {
        counts[name] = counts[name] + 1;
      } else {
        counts[name] = 1;
      }
    });
  });

  //  FIXME: Only check substring on transaction name to contribute to count even if
  //  references end with random strings of numbers
  ////////////////////
  let newCounts: any = {};
  Object.keys(filtered).forEach(key => {
    filtered[key].forEach((item: any) => {
      const { name } = item;
      if (newCounts[name]) {
        newCounts[name] = counts[name] + 1;
      } else {
        newCounts[name] = 1;
      }
    });
  });
  console.log(newCounts);
  ///////////////////
  //Remove items that occur only once across all months
  let finals: any = [];
  Object.keys(counts).forEach(key => {
    if (counts[key] !== 1) {
      finals.push(key);
    }
  });

  //  Change shape of recurring items
  let formattedFinals = finals.map((item: any) => {
    return {
      name: item,
      months: []
    };
  });

  //  Add amounts per month to recurring items
  Object.keys(sorted).forEach(key => {
    sorted[key].forEach((refItem: any) => {
      formattedFinals.forEach((item: any) => {
        if (refItem.name === item.name) {
          item.months.push({ month: key, amount: refItem.amount });
        }
      });
    });
  });

  return formattedFinals;
}
