// import "./modules/batman.js"
// import "./modules/superman.js"
// const superHero = require("./modules/superhero");

// // destracturing import objects
// const { add, subtract } = require("./modules/math");

// console.log("🚀 ~ file: index.js:4 ~ superHero:", superHero.getName());
// superHero.setName("Superman");
// console.log("🚀 ~ file: index.js:6 ~ superHero:", superHero.getName());

// console.log("🚀 ~ file: index.js:11 ~ add:", add(3, 90));
// console.log("🚀 ~ file: index.js:11 ~ subtract:", subtract(30, 20));

const request = require("request");
const express = require("express");
const app = express();
const port = 3000;
let code = 0;

app.get("/", (req, res) => {
  setInterval(() => {
    request("http://www.google.com", function (error, response, body) {
      // Print the error if one occurred
      if (error) console.log("error:", error); // Print the error if one occurred
      code = response.statusCode;
      // console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
      //   console.log("body:", body); // Print the HTML for the Google homepage.
      console.log("code:", code); // Print the HTML for the Google homepage.
    });
  }, 1000);
  res.send(code.toString());
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
