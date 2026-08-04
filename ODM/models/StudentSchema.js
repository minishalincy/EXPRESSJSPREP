const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  city: String,
  course: String,
  isActive: Boolean,
});

module.exports = mongoose.model("Student", studentSchema); // "Student" is the model name
