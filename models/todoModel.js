const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    todoText: String,
    isCompleted :  { type: Boolean, default: false }
  },

);

const Todo = mongoose.model("Todo",schema);
module.exports = Todo;