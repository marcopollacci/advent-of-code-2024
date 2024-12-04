import input from "../common.js";

const initialArray = input.split("\n");
const wordToSearch = "XMAS";

const rows = initialArray.length;
const columns = initialArray[0].length;

const directions = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
  [1, 1],
  [1, -1],
  [-1, 1],
  [-1, -1],
];

let count = 0;

const doThePuzzle = () => {
  function checkDirection(row, col, rowOffset, colOffset) {
    for (let i = 0; i < wordToSearch.length; i++) {
      const newRow = row + i * rowOffset;
      const newCol = col + i * colOffset;
      if (
        newRow < 0 ||
        newRow >= rows ||
        newCol < 0 ||
        newCol >= columns ||
        initialArray[newRow][newCol] !== wordToSearch[i]
      ) {
        return false;
      }
    }
    return true;
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < columns; col++) {
      for (const [rowOffset, colOffset] of directions) {
        if (checkDirection(row, col, rowOffset, colOffset)) {
          count++;
        }
      }
    }
  }

  return count;
};

const result = doThePuzzle();

console.time("🚀 ~ result");
console.log("🚀 ~ result:", result);
console.timeEnd("🚀 ~ result");
