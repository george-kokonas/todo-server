const mongoose = require("mongoose");
require("dotenv").config();

const URI = "mongodb+srv://halim:20028952Sami@cluster0.b1pz3.mongodb.net/todoapptest?retryWrites=true&w=majority"
main()
  .then(() => console.log("db connected succesfully!"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(URI);
}

module.exports = main;
