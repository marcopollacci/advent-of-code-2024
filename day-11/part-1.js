import input from "../common.js";

const initialArray = input.split(" ");

const blinkTime = 25;

const isEven = (num) => {
  return num % 2 === 0;
};

let newStones = initialArray;

for (let i = 1; i <= blinkTime; i++) {
  const tempStones = [];
  newStones.forEach((stone) => {
    const check = Number(stone);
    if (check === 0) {
      tempStones.push("1");
    } else if (check === 1) {
      tempStones.push("2024");
    } else if (isEven(stone.length)) {
      const firstPart = Number(stone.slice(0, stone.length / 2));
      const secondPart = Number(stone.slice(stone.length / 2));
      tempStones.push(firstPart.toString(), secondPart.toString());
    } else {
      tempStones.push((check * 2024).toString());
    }
  });
  newStones = tempStones;
}
console.time("🚀 ~ newStones");
console.log("🚀 ~ newStones:", newStones.length);
console.timeEnd("🚀 ~ newStones");

