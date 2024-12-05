import input from "../common.js";

const initialArray = input.split("\n\n");
const [rules, print] = initialArray;
const splitRules = rules.split("\n");
const splitPrint = print.split("\n");

//creating dataset for rule
const graph = new Map();
let total = 0;
let total2 = 0;

for (const rule of splitRules) {
  const [x, y] = rule.split("|").map(Number);
  if (!graph.has(x)) graph.set(x, []);
  graph.get(x).push(y);
}

splitPrint.forEach((page) => {
  const sequence = page.split(",").map(Number);
  if (isValidOrder(sequence, graph)) {
    //sum directly
    const midValue = Math.floor(sequence.length / 2);
    total += sequence[midValue];
  } else {
    reorderCorrectly(sequence, graph);
  }
});

function isValidOrder(sequence, graph) {
  const position = new Map();
  sequence.forEach((page, index) => position.set(page, index));
  for (const [x, ys] of graph.entries()) {
    if (!position.has(x)) continue; // not in the sequence
    for (const y of ys) {
      if (position.has(y) && position.get(x) > position.get(y)) {
        return false; // X must come before Y
      }
    }
  }
  return true;
}

function reorderCorrectly(sequence, graph) {
  sequence.sort((a, b) => {
    //get graph for a and b
    const aGraph = graph.get(a);
    const bGraph = graph.get(b);
    if (!aGraph) return -1;
    if (!bGraph) return 1;
    return (
      aGraph.filter((num) => sequence.includes(num)).length -
      bGraph.filter((num) => sequence.includes(num)).length
    );
  });

  const midValue = Math.floor(sequence.length / 2);
  total2 += sequence[midValue];
}

console.time("🚀 ~ total");
console.log("🚀 ~ total:", total);
console.log("🚀 ~ total part 2:", total2);
console.timeEnd("🚀 ~ total");
