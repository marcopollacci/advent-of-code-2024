import { readFileSync } from "fs";

const input = readFileSync(`./day-${process.env.DAY}/input.txt`, "utf8").trim();
export default input;
