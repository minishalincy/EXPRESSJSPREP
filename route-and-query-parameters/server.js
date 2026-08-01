// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//   res.send("Welcome");
// });

// app.get("/student/:id/", (req, res) => {
//   //route parameter
//   res.send(`Student Id: ${req.params.id}`);
// });

// app.get("/student/", (req, res) => {
//     //query parameter
//   res.send(`Hola, ${req.query.name}`); //http://localhost:3000/student/?name=minisha
// });

// app.listen(3000, () => {
//   console.log("server is running");
// });


const express = require("express")
const app = express()
require("./db")
const Student = require("./models/studentSchema")

const a = new Student({
    name:"Minisha",
    age:22,
    course:"MERN"
})

a.save()