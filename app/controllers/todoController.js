const express = require("express");
const router = express.Router();

const { Todo } = require("../models/todo");

router.get("/todos", (req, res) => {
  Todo.find()
    .then((todo) => {
      if (todo.length != 0) {
        res.send(todo);
      } else {
        res.send("There are no todos");
      }
    })
    .catch((err) => {
      res.send(err);
    });
});

router.get("/todos/about", (req, res) => {
  const value = req.query.currentState;
  Todo.find({ currentState: value })
    .exec()
    .then((todo) => {
      if (todo.length !== 0) {
        res.send(todo);
      } else {
        res.send("There are no todos");
      }
    })
    .catch((err) => {
      res.send(err);
    });
});

router.get("/todos/:id", (req, res) => {
  const id = req.params.id;
  Todo.findOne({
    _id: id,
  })
    .then((todo) => {
      if (todo) {
        res.send(todo);
      } else {
        res.send("Todo are not found");
      }
    })
    .catch((err) => {
      res.send(err);
    });
});

router.post("/todo/create", (req, res) => {
  const body = req.body;
  const todo = new Todo(body);
  todo
    .save()
    .then((todo) => {
      Todo.find().then((todo) => res.send(todo));
    })
    .catch((err) => {
      res.send(err);
    });
});
router.put("/todos/:id", (req, res) => {
  const id = req.params.id;
  const todo = req.body;
  Todo.findOneAndUpdate(
    {
      _id: id,
    },
    todo,
    function (err, data) {
      if (err) console.log(err);
    }
  )
    .then((todo) => {
      Todo.find().then((todo) => res.send(todo));
    })
    .catch((err) => {
      res.send(err);
    });
});
router.delete("/todos/delete/:id", (req, res) => {
  const id = req.params.id;
  Todo.findOneAndDelete({
    _id: id,
  })
    .then((todo) => {
      if (todo) {
        Todo.find().then((todo) => res.send(todo));
      }
    })
    .catch((err) => {
      res.send(err);
    });
});

router.get("/search/todos", (req, res) => {
  const text = req.query.value;
  Todo.find({ $text: { $search: text } }).exec()
  .then((todos) => {
    if (todos.length !== 0) {
      res.send(todos);
    } else {
      Todo.find().then((todo) => res.send(todo));
    }
  })
  .catch((err) => res.send(err));
});

module.exports = {
  todoRouter: router,
};
