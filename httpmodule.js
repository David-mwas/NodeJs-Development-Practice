const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello world human");
    res.end();
  }
  if (req.url === "/api/courses") {
    res.write(JSON.stringify(["js", "react", "nodejs"]));
    res.end();
  }
});

// server.on("connection", (soket) => {
//   console.log("new connection..");
// });
server.listen(3000);

console.log("Listening on port 3000...");
