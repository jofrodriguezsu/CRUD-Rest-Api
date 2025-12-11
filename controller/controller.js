const BookModel = require("../model/bookModel.js")

//GET all books

const readAll = async (req, res, next)=>{

  try{
  const book = await BookModel.find()
  res.status(200).json(book)
  }

  catch(error){
    next(error)
  }
}

//GET one book

const readOne = async (req, res, next)=>{
  const {id} = req.params
  try{
  const book = await BookModel.findById(id)

  if(!book){
    return next({message: "Book not found", statusCode: 404})
  }
  res.status(200).json(book)
  }
  catch(error){
    next(error)
  }
}

// ADD one book

const create = async (req, res, next)=>{

  const {title, author, country, year} = req.body

  try{
  if(!title || !author || !country || !year){
    return next({message: "Information provided is incomplete", statusCode: 400})
  }

  const createBook = await BookModel.create({title, author, country, year})

  res.status(201).json({message:"Book added successfully", data: createBook})
  }
  
  catch(error){
    next(error)
  }

}

// UPDATE one book

const updateOne = async(req, res, next)=>{
  const {title, author, country, year} = req.body
  const {id} = req.params

  try{
  const updateBook = await BookModel.findByIdAndUpdate(id, {title, author, country, year}, {new:true})
  
  if(!updateBook){
    return next({message: "Book not found", statusCode: 404})
  }

  res.status(200).json({message:"Book updated successfully", data: updateBook})
  }

  catch(error){
    next(error)
  }
}

//DELETE

const deleteOne = async(req, res, next)=>{
  try{
    const {id} = req.params
    const deleteBook = await BookModel.findByIdAndDelete(id)

    if(!deleteBook){
    return next({message: "Book not found", statusCode: 400})
    }

    res.json({message: `The book (id: ${id}) has been deleted`})
  }

  catch(error){
    next(error)
  }
}

module.exports = {readAll, readOne, create, updateOne, deleteOne}