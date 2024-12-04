import input from "../common.js";

const initialArray = input.split("\n");

const rows = initialArray.length;
const columns = initialArray[0].length;
let count = 0;

const doThePuzzle = () => {
  for (let row = 1; row < rows - 1; row++) {
    for (let col = 1; col < columns - 1; col++) {
      if (initialArray[row][col] === "A") {
        const firstCheck =
          (initialArray[row - 1][col - 1] === "M" &&
            initialArray[row + 1][col + 1] === "S") ||
          (initialArray[row - 1][col - 1] === "S" &&
            initialArray[row + 1][col + 1] === "M");
        const secondCheck =
          (initialArray[row - 1][col + 1] === "M" &&
            initialArray[row + 1][col - 1] === "S") ||
          (initialArray[row - 1][col + 1] === "S" &&
            initialArray[row + 1][col - 1] === "M");
        if (firstCheck && secondCheck) count++;
      }
    }
  }
  return count;
};

const result = doThePuzzle();

console.time("🚀 ~ result");
console.log("🚀 ~ result:", result);
console.timeEnd("🚀 ~ result");
