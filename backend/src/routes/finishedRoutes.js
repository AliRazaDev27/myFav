import express from "express";
import { getFinishedBooks, postFinishedBooks, getFinishedDramas, postFinishedDramas, deleteFinishedDramas } from "../controllers/finishedController.js";
const finishedRouter = express.Router()

finishedRouter.get("/books/:userID", getFinishedBooks)
finishedRouter.post("/books", postFinishedBooks)

finishedRouter.get("/dramas/:userID", getFinishedDramas)
finishedRouter.post("/dramas", postFinishedDramas)
finishedRouter.delete("/dramas/:dramaId/:userId", deleteFinishedDramas)
export default finishedRouter
