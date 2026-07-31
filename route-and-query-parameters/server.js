const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.get("/student/:id", (req, res) => {
  //route parameter
  res.send(`Student Id: ${req.params.id}`);
});

app.listen(3000, () => {
  console.log("server is running");
});
