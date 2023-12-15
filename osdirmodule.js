const os = require("os");
const fs = require("fs");

let totalMem = os.totalmem();
let freeMem = os.freemem();

const files = fs.readdirSync("./");

fs.readdir("./", (err, files) => {
  if (err) {
    console.error("Error found", err);
  } else {
    console.log("Result from async", files);
  }
});

console.log(`Total Memory : ${totalMem}`);
console.log(`Free Memory : ${freeMem}`);

console.log("🚀 ~ file: app.js:8 ~ files:", files);
