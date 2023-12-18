const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello from movie api");
  console.log(req);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
