import { getAllBooks, addBook, getBooksWithLanguage, getBooksWithCountry } from "../controllers/bookController.js"
import express from "express"

const bookRouter = express.Router();

bookRouter.get("/", getAllBooks)
bookRouter.get("/lang/:lang", getBooksWithLanguage)
bookRouter.get("/country/:country", getBooksWithCountry)
bookRouter.post("/", addBook)

export default bookRouter
