import input from "../common.js";

// Read and parse the initialArray file
const initialArray = input.split("\n");
const rows = initialArray.length;
const cols = initialArray[0].length;

// Direction vectors (up, right, down, left)
const directions = [
  [-1, 0], // Up
  [0, 1], // Right
  [1, 0], // Down
  [0, -1], // Left
];

// Initial position of the guard
let startX, startY, startDir;
for (let r = 0; r < rows; r++) {
  for (let c = 0; c < cols; c++) {
    if ("^>v<".includes(initialArray[r][c])) {
      startX = r;
      startY = c;
      startDir = "^>v<".indexOf(initialArray[r][c]); // Map direction symbol to index
      break;
    }
  }
}

// Function to simulate guard movement with an optional extra obstacle
const simulateWithObstacle = (obstacleRow, obstacleCol) => {
  let guardRow = startX;
  let guardCol = startY;
  let dir = startDir;
  const visited = new Set();
  visited.add(`${guardRow},${guardCol},${dir}`);

  while (true) {
    const [dr, dc] = directions[dir];
    const nextRow = guardRow + dr;
    const nextCol = guardCol + dc;

    // Can i exit?
    if (nextRow < 0 || nextRow >= rows || nextCol < 0 || nextCol >= cols) {
      return false;
    }

    const nextCell =
      nextRow === obstacleRow && nextCol === obstacleCol
        ? "#"
        : initialArray[nextRow][nextCol];
    if (nextCell === "#") {
      // Turn 90° to the right
      dir = (dir + 1) % 4;
    } else {
      // Move forward
      guardRow = nextRow;
      guardCol = nextCol;
    }

    const state = `${guardRow},${guardCol},${dir}`;
    if (visited.has(state)) {
      return true; // Loop detected
    }
    visited.add(state);
  }
};

// Count valid positions for the new obstruction
let validPositions = 0;

for (let r = 0; r < rows; r++) {
  for (let c = 0; c < cols; c++) {
    // Skip positions that are not empty or are the starting position
    if (initialArray[r][c] === "#" || (r === startX && c === startY)) {
      continue;
    }

    // Simulate guard movement with an obstacle at (r, c)
    if (simulateWithObstacle(r, c)) {
      validPositions++;
    }
  }
}

console.time("🚀 ~ total");
console.log(`total: ${validPositions}`);
console.timeEnd("🚀 ~ total");
