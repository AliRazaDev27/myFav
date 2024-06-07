import { getAllBooks, addBook, loadData } from "../controllers/bookController.js"
import express from "express"
const bookRouter = express.Router();
bookRouter.get("/", getAllBooks)
bookRouter.post("/", addBook)
bookRouter.get("/load", loadData)

export default bookRouter
