// loading add module in hello module
// require("./modules/add")

// Es equivalent
// import "./modules/add"

const add = require("./modules/add");



//prints hello world on console
console.log("hello world");

// default import add method from /modules
const sum = add(3, 7);
console.log("🚀 ~ file: hello.js:13 ~ sum:", sum)
