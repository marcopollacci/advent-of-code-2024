// Importa l'input
import input from "../common.js";

function solve(input) {
  // Convert disk into an array of file IDs, where each element represents the file ID of that block
  const disk = input.match(/(\d(\d|$))/g).flatMap((group, matchIndex) => {
    return [
      ...new Array(parseInt(group[0])).fill(matchIndex),
      ...new Array(parseInt(group[1] || "0")).fill(null),
    ];
  });

  console.log("🚀 ~ disk ~ disk:", disk);

  const indexFilled = [];
  const indexEmpty = [];

  //check filled and empty indexes
  disk.forEach((fileId, index) => {
    if (fileId === null) {
      indexEmpty.push(index);
    } else {
      indexFilled.push(index);
    }
  });

  // Calculate
  let pointerToCheck = indexEmpty.findIndex((i) => i >= indexFilled.length);
  const checksum = indexFilled.reduce((sum, filledIndex) => {
    const actualPosition =
      filledIndex < indexFilled.length
        ? filledIndex
        : indexEmpty[--pointerToCheck];
    return sum + disk[filledIndex] * actualPosition;
  }, 0);

  return checksum;
}

console.log("Checksum:", solve(input));
