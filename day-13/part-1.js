import input from "../common.js";
console.log("🚀 ~ input:", input);

const initialArray = input.split("\n\n");

const doSomethingUseful = () => {
  const allSlot = initialArray.map((lines) => {
    const [buttonA, buttonB, prize] = lines.split("\n");
    const [c1, c4] = buttonA
      .split(": ")[1]
      .split(", ")
      .map((num) => parseInt(num.split("+")[1]));
    const [c2, c5] = buttonB
      .split(": ")[1]
      .split(", ")
      .map((num) => parseInt(num.split("+")[1]));
    const [c3, c6] = prize
      .split(": ")[1]
      .split(", ")
      .map((num) => parseInt(num.split("=")[1]));
    return { c1, c2, c3, c4, c5, c6 };
  });

  return allSlot.reduce((sum, slot) => {
    const b =
      (slot.c1 * slot.c6 - slot.c4 * slot.c3) /
      (slot.c1 * slot.c5 - slot.c4 * slot.c2);
    const a = (slot.c3 - slot.c2 * b) / slot.c1;

    return sum + (a % 1 === 0 && b % 1 === 0 ? a * 3 + b : 0);
  }, 0);
};

console.time("🚀 ~ doSomethingUseful");
console.log(doSomethingUseful());
console.timeEnd("🚀 ~ doSomethingUseful");
