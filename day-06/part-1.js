import input from "../common.js";
const initialArray = input.split("\n");

// Possible directions: up, right, down, left
const directions = [
  [-1, 0], // Up
  [0, 1], // Right
  [1, 0], // Down
  [0, -1], // Left
];
const directionMap = { "^": 0, ">": 1, v: 2, "<": 3 };

// Initial position of the guard
let startX, startY, dir;
for (let i = 0; i < initialArray.length; i++) {
  for (let j = 0; j < initialArray[i].length; j++) {
    if ("^>v<".includes(initialArray[i][j])) {
      startX = i;
      startY = j;
      dir = directionMap[initialArray[i][j]];
    }
  }
}

//
const visited = new Set();
visited.add(startX * initialArray[0].length + startY);

// Map dimensions
const rows = initialArray.length;
const cols = initialArray[0].length;

// Do!
let x = startX;
let y = startY;
let guardExited = false;

while (!guardExited) {
  // Next position
  const [dx, dy] = directions[dir];
  const nextX = x + dx;
  const nextY = y + dy;

  // Can i exit?
  if (nextX < 0 || nextX >= rows || nextY < 0 || nextY >= cols) {
    guardExited = true;
    break;
  }

  // Is blocked?
  if (initialArray[nextX][nextY] === "#") {
    // Turn 90° to the right
    dir = (dir + 1) % 4;
  } else {
    x = nextX;
    y = nextY;

    // Add the visited position
    visited.add(x * cols + y);
  }
}
console.time("🚀 ~ total");
console.log("total: ", visited.size);
console.timeEnd("🚀 ~ total");
