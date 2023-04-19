const express = require("express");
const todoRoutes = require("./routes/routesTodos");
const cors = require("cors");
require("./database/connection");

const Port = process.env.PORT || 8080;
const app = express();
app.use(express.json());
app.use(cors());

app.use("/todos", todoRoutes);
// app.get("/" , (req , res)=>{
//   res.send("hello im working")
// })
app.listen(Port, () => {
  console.log(`Server is listening on port ${Port}`);
});
