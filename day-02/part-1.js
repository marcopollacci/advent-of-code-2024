import input from "../common.js";

const initialArray = input.split("\n");
let counterSafe = 0;

initialArray.forEach((row) => {
  const numbers = row.split(/\s+/);

  const differences = [];
  for (let i = 0; i < numbers.length - 1; i++) {
    differences.push(numbers[i + 1] - numbers[i]);
  }
  console.log("🚀 ~ initialArray.forEach ~ differences:", differences);

  const [firstDifference] = differences;

  const isSafe = differences.every((difference) => Math.abs(difference) <= 3);
  const isAllSameValue = differences.every(
    (difference) => Math.sign(difference) === Math.sign(firstDifference)
  );

  if (isSafe && isAllSameValue) {
    counterSafe++;
  }
});
console.log("🚀 ~ counterSafe:", counterSafe);
