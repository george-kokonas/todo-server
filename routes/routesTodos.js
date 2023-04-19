const express = require("express");
const router = express.Router();

const {
  getTodos,
  createTodos,
  updateTodos,
  updateTodoStatus,
  deleteTodos,
} = require("../controllers/controllersTodos");

router.get("/", getTodos);
router.post("/create", createTodos);
router.put("/update/:id", updateTodos);
router.put("/updateStatus/:id", updateTodoStatus);
router.delete("/delete", deleteTodos);

module.exports = router;
