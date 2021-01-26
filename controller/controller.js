const Todos = require("../model");
const todos = require("../model").Todos

// create and save todos
exports.create = (req, res) => {
  if (req.body) {
    res.status(400).send({ message: "Required field(s) text missing" });
    return;
  }

  const todosData = req.body;

  todos.save(todosData, (err, data) => {
    if (err) {
      res
        .status(500)
        .send({ message: err.message || "Errors were encounterd" });
    } else {
      res.status(200).send(data);
    }
  });
};

// retrieve and return all todos return single todo

exports.find = (req, res) => {
  Todos.find({}, (err, data) => {
    if (err) {
      res.status(400).send({ message: err.message });
    } else {
      res.status(200).send(data);
    }
  });
};

// Update a new Indentified todo bu todoId

// Delele a todo with specified todoId in the request
