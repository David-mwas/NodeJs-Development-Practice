const app = require("express")();
// const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/api/courses", (req, res) => {
  res.send([1, 23, 4, 5]);
});

app.listen(5000, () => {
  console.log("Listening on port 5000...");
});
