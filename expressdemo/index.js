const express = require("express");
const app = express();
app.use(express.json());

const courses = [
  { id: 1, name: "course1" },
  { id: 2, name: "course2" },
  { id: 3, name: "course3" },
];

app.get("/", (req, res) => {
  res.send("hello world");
});

// GET request
app.get("/api/courses", (req, res) => {
  res.send(courses);
});

// POST requst
app.post("/api/courses", (req, res) => {
  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(course);
  res.send(course);
});

app.get("/api/courses/:id", (req, res) => {
  res.send(req.params.id);
});

app.get("/api/posts/:year/:month", (req, res) => {
  res.send(req.params);
});

app.get("/api/posts/:year/:month", (req, res) => {
  res.send(req.query);
});

// UPDATE request
app.put("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) {
    return res.status(404).send("The course with the given id was not found!");
  }

  course.name = req.body.name;
  res.send(course);
});

// DELETE request
app.delete("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) {
    return res.status(404).send("The course with the given id was not found!");
  }

  const index = courses.indexOf(course);
  courses.splice(index, 1);

  res.send(course);
});

// PORT
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
