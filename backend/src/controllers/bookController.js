import bookModel from "../models/bookModel.js"
import load from "../../loadData.js"

const getAllBooks = async (req, res) => {
  try {
    const books = await bookModel.find()
    res.json(books)
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
const loadData = async (req, res) => {
  try {
    await load()
    res.send("loaded")
  } catch (error) {
    res.send(error)
  }
}
export { getAllBooks, addBook, loadData, getBooksWithLanguage, getBooksWithCountry }
