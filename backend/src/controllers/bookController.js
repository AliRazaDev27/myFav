import bookModel from "../models/bookModel.js"

const getAllBooks = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    const books = await bookModel.find().skip(skip).limit(limit)
    const total = await bookModel.find().count()
    res.json({
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
      books
    })
  } catch (error) {
    res.send(error)
    console.log(error)
  }
}
const getBooksWithLanguage = async (req, res) => {
  try {
    const books = await bookModel.find({ language: req.params.lang })
    res.json(books)
  } catch (error) {
    res.send(error)
    console.log(error)
  }
}
const getBooksWithCountry = async (req, res) => {
  try {
    const books = await bookModel.find({ country: req.params.country })
    res.json(books)
  } catch (error) {
    res.send(error)
    console.log(error)
  }
}
const addBook = async (req, res) => {
  try {
    const book = new bookModel(req.body)
    book.save()
    res.status(201).json(book)
  }
  catch (error) {
    res.status(400).send(error)
  }
}
export { getAllBooks, addBook, getBooksWithLanguage, getBooksWithCountry }
