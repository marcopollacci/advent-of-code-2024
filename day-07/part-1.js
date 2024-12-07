import input from "../common.js";

const initialArray = input.split("\n");

let totalSum = 0;
initialArray.forEach((row) => {
  const [total, numbers] = row.split(":");
  const numbersArray = numbers.trim().split(" ").map(Number);
  // Generate all possible operator combinations
  const operatorCombinations = generateOperators(numbersArray.length - 1);

  for (const operatorCombination of operatorCombinations) {
    if (
      checkIfSumItsRight(operatorCombination, numbersArray) === Number(total)
    ) {
      totalSum += Number(total);
      break;
    }
  }
});

console.time("🚀 ~ totalSum");
console.log("🚀 ~ totalSum:", totalSum);

function checkIfSumItsRight(operator, numbers) {
  let result = numbers[0];
  for (let i = 0; i < operator.length; i++) {
    if (operator[i] === "+") {
      result += numbers[i + 1];
    } else if (operator[i] === "*") {
      result *= numbers[i + 1];
    }
  }
  return result;
}

// Generate all combinations of operators for a given length
function generateOperators(length) {
  const combinations = [];
  const generate = (current) => {
    if (current.length === length) {
      combinations.push([...current]);
      return;
    }
    current.push("+");
    generate(current);
    current.pop();
    current.push("*");
    generate(current);
    current.pop();
  };
  generate([]);
  return combinations;
}
