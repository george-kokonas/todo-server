const todoModel = require("../models/todoModel");

const getTodos = async (req, res) => {
  try {
    const todos = await todoModel.find();
    todos.length ? res.send(todos) : res.send([]);
  } catch (error) {
    res.status(500).send("something went wrong...");
    throw error;
  }
};

const createTodos = async (req, res) => {
  const { todoText, isCompleted } = req.body;

  try {
    await todoModel.create({ todoText, isCompleted });
    res.send("todo created");
  } catch (error) {
    res.status(500).send("something went wrong...");
    throw error;
  }
};

const updateTodos = async (req, res) => {
  const { id } = req.params;
  const { newText } = req.body;

  try {
    await todoModel.findOneAndUpdate({ _id: id }, { todoText: newText });
    res.send("Todo Updated");
  } catch (error) {
    res.status(400).send("something went wrong...");
    console.error(error);
  }
};

const updateTodoStatus = async (req, res) => {
  const { id } = req.params;
  const { itemStatus } = req.body;

  try {
    await todoModel.findOneAndUpdate({ _id: id }, { isCompleted: !itemStatus });

    res.send("Todo Status Updated");
  } catch (error) {
    res.status(400).send("something went wrong...");
    console.error(error);
  }
};

const deleteTodos = async (req, res) => {
  try {
    await todoModel.deleteMany({ isCompleted: true });
    res.send("Todo deleted");
  } catch (error) {
    res.status(400).send("something went wrong...");
    console.log(error);
  }
};

module.exports = {
  getTodos,
  createTodos,
  updateTodos,
  updateTodoStatus,
  deleteTodos,
};
