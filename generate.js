import { existsSync, mkdir, writeFileSync } from "fs";
const [, , dayToGenerate] = process.argv;
if (!dayToGenerate) {
  throw new Error("Missing day to generate");
}
//check if folder already exists
if (existsSync(`./day-${dayToGenerate}`)) {
  throw new Error(`Folder ./day-${dayToGenerate} already exists`);
}
//create folder if not exists
mkdir(`./day-${dayToGenerate}`, () => {
  //create input.txt file if not exists

  writeFileSync(`./day-${dayToGenerate}/input.txt`, "");

  //create part-1.js file if not exists
  writeFileSync(
    `./day-${dayToGenerate}/part-1.js`,
    `import input from "../common.js";
console.log("🚀 ~ input:", input);
`
  );
  console.log(`Created folder ./day-${dayToGenerate}`);
});

console.log("🚀 ~ dayToGenerate:", dayToGenerate);
