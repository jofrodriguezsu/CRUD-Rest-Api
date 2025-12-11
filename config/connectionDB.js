const mongoose = require("mongoose")

const connectDB = async function() {
  try{
    await mongoose.connect(process.env.MONGO_URI)
    console.log("Database connected successfully✅")
  }
  catch(error){
    console.error("MongoDB connection error", error)
  }
}

module.exports = connectDB