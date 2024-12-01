import input from "../common.js";

const initialArray = input.split("\n");

const firstColumn = initialArray.map((row) => row.split(/\s+/)[0]).sort();
const secondColumn = initialArray.map((row) => row.split(/\s+/)[1]).sort();

// difference betwwen first and second column
const result = firstColumn.reduce(
  (acc, curr, index) =>
    // lazy is the best
    acc + Math.abs(curr - secondColumn[index]),
  0
);

console.log("🚀 ~ result:", result);
