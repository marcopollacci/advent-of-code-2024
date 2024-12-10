import input from "../common.js";

function calculateTrailheadScores(map) {
  const grid = map.split("\n").map((row) => row.split("").map(Number));
  const rows = grid.length;
  const cols = grid[0].length;

  // List of trailheads
  const trailheads = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 0) trailheads.push([r, c]);
    }
  }

  const isValid = (r, c, prevHeight) =>
    r >= 0 && c >= 0 && r < rows && c < cols && grid[r][c] === prevHeight + 1;

  // Let's calculate the score
  function exploreTrailhead(start) {
    const visited = new Set();
    const queue = [start];
    let countNines = 0;

    while (queue.length > 0) {
      const [r, c] = queue.shift();
      const key = `${r},${c}`;
      if (visited.has(key)) continue;
      visited.add(key);

      if (grid[r][c] === 9) countNines++;

      const directions = [
        [r - 1, c], // Up
        [r + 1, c], // Down
        [r, c - 1], // Left
        [r, c + 1], // Right
      ];
      for (const [nr, nc] of directions) {
        if (isValid(nr, nc, grid[r][c])) {
          queue.push([nr, nc]);
        }
      }
    }

    return countNines;
  }

  // sum of trailhead scores
  let totalScore = 0;
  for (const trailhead of trailheads) {
    totalScore += exploreTrailhead(trailhead);
  }

  return totalScore;
}

console.log("Total:", calculateTrailheadScores(input));
