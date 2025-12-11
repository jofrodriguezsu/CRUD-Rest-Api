require("dotenv").config()
const express = require("express")
const app = express()
const connectDB = require("./config/connectionDB.js")
const router = require("./routes/routes.js")
const errorHandler = require("./middleware/errorHandler.js")
const PORT = process.env.PORT || 5000

connectDB()

app.use(express.json())
app.use("/books", router)

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" })
})

app.use(errorHandler)


app.listen(PORT, ()=>{
  console.log(`Server running on port ${PORT}`)
})


