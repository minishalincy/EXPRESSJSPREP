//logics in this file
const Student = require("../models/StudentSchema");
const getStudentForm = (req, res) => {
  res.render("student"); //file name it is the views/student.ejs ---> first render the form
};

const addStudent = (req, res) => {
  const studentData = new Student({
    name: req.body.name, //name is in name="name" in ejs form
    age: req.body.age,
    course: req.body.course,
  });
  studentData
    .save()
    .then(() => {
      res.send("Data Added Successfully");
    })
    .catch((err) => {
      res.send("Failed to add");
    });
};

const fetchData=(req,res)=>{
    Student.find({})
    .then((x)=>{res.render("student_details",{x})})
    .catch((err)=>{res.send("failed to fetch")})
}

module.exports = { getStudentForm  , addStudent, fetchData};
