const express = require("express");

const app = express(); //it acts as an object that provides tools

app.get("/", (req, res) => {
  res.send("Welcome to Home Page");
});

app.get("/about", (req, res) => {
  res.send("Contact us: +91 9479833344");
});

app.get("/student", (req, res) => {
  let student = {
    name: "Minisha",
    city: "Bengaluru",
  };

  res.json(student);
});

app.listen(3000, () => {
  console.log("Server is running");
});
