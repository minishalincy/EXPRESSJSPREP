const express = require("express");
const router = express.Router();

const { getStudentForm, addStudent, fetchData } = require("../controller/StudentController");

router.get("/addstudent", getStudentForm);
router.post("/addstudent", addStudent)
router.get("/view", fetchData)

module.exports = router;