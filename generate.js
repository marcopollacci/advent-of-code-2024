import { existsSync, mkdir, writeFileSync } from "fs";
const [, , dayToGenerate] = process.argv;

if (!dayToGenerate) {
  throw new Error("Missing day to generate");
}

const newFolder = `./day-${dayToGenerate}`;

//check if folder already exists
if (existsSync(newFolder)) {
  throw new Error(`Folder ${newFolder} already exists`);
}
//create folder if not exists
mkdir(newFolder, () => {
  //create input.txt file if not exists
  writeFileSync(`${newFolder}/input.txt`, "");

  //create mission.md file if not exists
  writeFileSync(`${newFolder}/mission.md`, "");

  //create part-1.js and part-2.js
  [1, 2].forEach((part) => {
    writeFileSync(
      `${newFolder}/part-${part}.js`,
      `import input from "../common.js";
console.log("🚀 ~ input:", input);`
    );
  });

  console.log(`Created folder ${newFolder}`);
});

console.log("🚀 ~ dayToGenerate:", dayToGenerate);
