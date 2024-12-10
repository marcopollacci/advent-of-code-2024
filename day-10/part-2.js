import input from "../common.js";

function calculateTrailheadRatings(map) {
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
    r >= 0 && c >= 0 && r < rows && c < cols && grid[r][c] === prevHeight + 1; // Altitudine deve aumentare di 1

  // Let's calculate the score
  function exploreTrailhead(start) {
    const paths = new Set();

    function dfs(path, r, c) {
      const key = `${r},${c}`;
      if (grid[r][c] === 9) {
        paths.add([...path, key].join("->"));
        return;
      }

      const directions = [
        [r - 1, c], // Up
        [r + 1, c], // Down
        [r, c - 1], // Left
        [r, c + 1], // Right
      ];

      for (const [nr, nc] of directions) {
        if (isValid(nr, nc, grid[r][c])) {
          dfs([...path, key], nr, nc);
        }
      }
    }

    dfs([], start[0], start[1]);
    return paths.size;
  }

  // sum of trailhead scores
  let totalRating = 0;
  for (const trailhead of trailheads) {
    totalRating += exploreTrailhead(trailhead);
  }

  return totalRating;
}

console.log("Total Rating:", calculateTrailheadRatings(input));
