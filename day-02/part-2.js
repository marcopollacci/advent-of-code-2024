import input from "../common.js";

const initialArray = input.split("\n");

const filtered = initialArray.filter((row) => {
  const numbers = row.split(/\s+/);
  const differences = calcDifferences(numbers);
  if (isSafe(differences)) {
    return true;
  }
  for (let i = 0; i < numbers.length - 1; i++) {
    const cloneArray = [...numbers];
    cloneArray.splice(i, 1);
    const check = calcDifferences(cloneArray);
    if (isSafe(check)) {
      return true;
    }
  }

  return false;
});
console.log("🚀 ~ filtered ~ filtered:", filtered.length);

//366

function calcDifferences(numbers) {
  const differences = [];
  for (let i = 0; i < numbers.length - 1; i++) {
    differences.push(numbers[i + 1] - numbers[i]);
  }

  return differences;
}

function isSafe(differences) {
  const [firstDifference] = differences.filter(
    (difference) => difference !== 0
  );

  const isSafe = differences.every((difference) => Math.abs(difference) <= 3);
  const isAllSameValue = differences.every(
    (difference) => Math.sign(difference) === Math.sign(firstDifference)
  );

  return isSafe && isAllSameValue;
}
