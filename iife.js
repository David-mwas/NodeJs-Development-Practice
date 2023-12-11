// Immediately Invoked Functions Expression(IIFE)

(function (message) {
  const superHero = "Batman";
  console.log("🚀 ~ file: iife.js:3 ~ superHero:", message, superHero);
})("Hello There");

(function (message) {
  const superHero = "Superman";
  console.log("🚀 ~ file: iife.js:8 ~ const:", message, superHero);
})("Hey There");
