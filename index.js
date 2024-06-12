const express = require("express");
const bodyParser = require("body-parser");
const { time, timeStamp } = require("console");
const app = express();
const port = 3000;

app.use(bodyParser.json());

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

let todos = [
  {
    id: "1",
    name: "seksak",
    status: true,
    created_at: formatDate(new Date()),
    updated_at: "",
  },
];

app.get("/todos", (req, res) => {
  res.json(todos);
});

app.post("/todos", (req, res) => {
  const todo = {
    id: (todos.length + 1).toString(),
    name: req.body.name,
    status: req.body.status,
    created_at: formatDate(new Date()),
    updated_at: "",
  };
  todos.push(todo);
  res.status(200).json(todo);
});

app.put("/todos/:id", (req, res) => {
  try {
    const id = req.params.id;
    const todo = todos.find((t) => t.id === id);
    if (todo) {
      todo.name = req.body.name !== undefined ? req.body.name : todo.name;
      todo.status =
        req.body.status !== undefined ? req.body.status : todo.status;
      todo.created_at =
        req.body.created_at !== undefined
          ? req.body.created_at
          : todo.created_at;
      todo.updated_at =
        req.body.updated_at !== undefined
          ? formatDate(new Date())
          : formatDate(new Date());
      res.json(todo);
    } else {
      res.status(404).json({ error: "To do not found" });
    }
  } catch (err) {
    res.status(500).json({ error: "An error occurred" });
  }
});

app.delete("/todos/:id", (req, res) => {
  const id = req.params.id;
  const index = todos.findIndex((t) => t.id === id);
  if (index !== -1) {
    const deleted = todos.splice(index, 1);
    res.json(deleted[0]);
  } else {
    res.status(404).json({ error: "To do not found" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
