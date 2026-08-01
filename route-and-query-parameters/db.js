const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/pentadbspace")

  .then(() => {
    console.log("MongoDB Connected 🎉");
  })
  .catch((err) => console.log(err));


// const connectDB = async () => {
//   try {
    
//     await mongoose.connect(process.env.MONGODB_URI);
//     console.log("MongoDB Connected 🎉");
//   } catch (err) {
//     console.log("MongoDB connection error:", err.message);
//   }
// };

// module.exports = connectDB;
