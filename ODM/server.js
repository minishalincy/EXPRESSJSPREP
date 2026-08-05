const express = require("express");
const app = express();
const Student = require("./models/StudentSchema");

require("./config/db");

//CRUD op

//1.creating operstions using create()
// Student.create({
//   name: "Minisha",
//   age: 22,
//   city: "Bengaluru",
//   course: "MERN",
//   isActive: true,
// });

//using save()
// const user = new Student({
//   name: "Lincy",
//   age: 21,
//   city: "Hyderabad",
//   course: "DevOps",
//   isActive: true,
// });

// user
//   .save()
//   .then(() => {
//     console.log("Data Saved");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//2.read operation
// using find() =>>>>>>>>>>>>>--------- return an array []
Student.find({})
.then((x)=>console.log(x)
)
.catch((err)=>{console.log(err)
})

//using findOne() =>>>>>>>>>>---------- returns a single record/doc in object
// Student.findOne({name:"Minisha"},{name:1, _id:0})
//  .then((x)=>console.log(x)
// )
// .catch((err)=>{console.log(err)
// })

//using findById() =>>>>>>>>>>>>>------------ return an array []
// Student.findById("6a716fdde4d13025a0a29ede")
//   .then((x) => console.log(x))
//   .catch((err) => {
//     console.log(err)
//   });

//using exists()
// Student.exists({ name: "Linc" })
//   .then((x) => {
//     if (x) {
//       console.log("User found");
//     } else {
//       console.log("User Not Found");
//       Student.create({
//         name: "Linc",
//         age: 23,
//         city: "Chennai",
//         course: "Cloud",
//         isActive: false,
//       });
//       console.log("User created");
//     }
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//3.update operation 
// using =>>>>>>>>>>>>>>-----updateOne()
// Student.updateOne({name:"Minisha"},{age:25})
// .then(()=>{console.log("Data updated");
// })
// .catch((err)=>{console.log(err);
// })

//using =>>>>>>>>>>>>>>>---------updateMany()
// Student.updateMany({course:"MERN"},{course:"MongoDB,ExpressJS,ReactJS,NodeJS"})
// .then(()=>{console.log("Data updated");
// })
// .catch((err)=>{console.log(err);
// })


//using =>>>>>>>>>>>>>>----findByIdAndUpdate()
// Student.findByIdAndUpdate("6a716fdde4d13025a0a29ede",{course:"Java Full stack"})
// .then(()=>{console.log("Data updated By Id");
// })
// .catch((err)=>{console.log(err);
// })

//4. Delete operation
//using deleteOne()
Student.deleteOne({name:"Linc"})
.then(()=>{console.log("student deleted")
})
.catch((err)=>{console.log(err)})