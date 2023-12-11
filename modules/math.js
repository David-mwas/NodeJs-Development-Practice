// module.exports = (a, b) => { //second export pattern
//   return a + b;
// };

// module.exports = add; first export pattern

const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

module.exports = { add, subtract };
