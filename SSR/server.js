const express = require("express");
const app = express();
require("./config/db");
require("dotenv").config();
app.set("view engine", "ejs");

//This is a built-in middleware function in Express.
//It parses incoming requests with urlencoded payloads and is based on body-parser.
app.use(express.urlencoded({ extended: true }));

const studentRoute = require("./routes/StudentRoutes");

app.use("", studentRoute);

app.listen(process.env.PORT, () => {
  console.log("Server Running");
});
