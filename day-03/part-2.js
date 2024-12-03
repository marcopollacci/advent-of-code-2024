import input from "../common.js";

const validMul = [
  ...input.matchAll(/mul\((\d{1,3}),(\d{1,3})\)|do\(\)|don't\(\)/g),
];

let isEnable = true;
let sum = 0;

validMul.forEach((mul) => {
  const [check, first, second] = mul;
  if (check === "do()") {
    isEnable = true;
    return;
  }
  if (check === "don't()") {
    isEnable = false;
    return;
  }
  if (isEnable) {
    sum += Number(first) * Number(second);
  }
});

console.log("🚀 ~ sum:", sum);
