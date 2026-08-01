const mongoose = require("mongoose")

//schema
const studentSchema = new mongoose.Schema({ //Schema method
    name:String,
    age:Number,
    course:String
})
//models

module.exports = mongoose.model("Student",studentSchema) //model method