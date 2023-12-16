const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello world human");
    res.end();
  }
  if (req.url === "/api/courses") {
    JSON.stringify(
      ["js ", "react ", "nodejs"].map((item) => {
        res.write(item.toUpperCase());
      })
    );

    res.end();
  }
  if (req.url === "/about") {
    res.write("Its about to go down hahaha");
    res.end();
  }
});

// server.on("connection", (soket) => {
//   console.log("new connection..");
// });
server.listen(3000);

console.log("Listening on port 3000...");
