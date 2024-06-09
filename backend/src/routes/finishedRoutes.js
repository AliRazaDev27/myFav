import express from "express";
import { getFinishedBooks, postFinishedBooks } from "../controllers/finishedController.js";
const finishedRouter = express.Router()

finishedRouter.get("/books", getFinishedBooks)
finishedRouter.post("/books", postFinishedBooks)
export default finishedRouter
