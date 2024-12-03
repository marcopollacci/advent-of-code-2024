import input from "../common.js";

const validMul = [...input.matchAll(/mul\((\d{1,3}),(\d{1,3})\)/g)];

const sum = validMul.reduce((acc, curr) => {
  const [, first, second] = curr;
  return acc + Number(first) * Number(second);
}, 0);

console.log("🚀 ~ sum:", sum);
