import input from "../common.js";

const initialArray = input.split(" ");

const blinkTime = 75;

const isEven = (num) => {
  return num % 2 === 0;
};

let newStones = new Map();

initialArray.forEach((stone) => {
  newStones.set(stone, 1);
});

for (let i = 1; i <= blinkTime; i++) {
  const tempStones = new Map();
  newStones.forEach((count, stone) => {
    const check = Number(stone);
    if (check === 0) {
      tempStones.set("1", (tempStones.get("1") || 0) + count);
    } else if (check === 1) {
      tempStones.set("2024", (tempStones.get("2024") || 0) + count);
    } else if (isEven(stone.length)) {
      const firstPart = Number(stone.slice(0, stone.length / 2)).toString();
      const secondPart = Number(stone.slice(stone.length / 2)).toString();
      tempStones.set(firstPart, (tempStones.get(firstPart) || 0) + count);
      tempStones.set(secondPart, (tempStones.get(secondPart) || 0) + count);
    } else {
      const newValue = (check * 2024).toString();
      tempStones.set(newValue, (tempStones.get(newValue) || 0) + count);
    }
  });
  newStones = tempStones;
}

let totalCount = 0;
newStones.forEach((count) => {
  totalCount += count;
});

console.time(" newStones");
console.log(" newStones:", totalCount);
console.timeEnd(" newStones");
