const mongoose = require ("mongoose")

const BookSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true, 
      trim: true,
    },
    author: {
      type: String,
      required: true,
      trim: true
    },
    country: {
      type: String,
      trim: true
    },
    year: {
      type: Number,
      required: true,
      max: new Date().getFullYear()
    }
},
{timestamps:true}
)

const BookModel = mongoose.model("book", BookSchema)

module.exports = BookModel
