import express from "express"
import { loadBookCategories, getAllBookCategories } from "../controllers/categoryController.js"

const categoryRouter = express.Router();

categoryRouter.get("/books/load", loadBookCategories)
categoryRouter.get("/books", getAllBookCategories)

export default categoryRouter
