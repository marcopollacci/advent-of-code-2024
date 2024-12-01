import input from "../common.js";

const initialArray = input.split("\n");

const firstColumn = initialArray.map((row) => row.split(/\s+/)[0]).sort();
const secondColumn = initialArray.map((row) => row.split(/\s+/)[1]).sort();

const total = firstColumn.reduce((acc, curr) => {
  //search how many time a number appears in second column
  const times = secondColumn.filter(
    (secondNumber) => secondNumber === curr
  ).length;
  return acc + times * curr;
}, 0);
console.log("🚀 ~ total ~ total:", total);
