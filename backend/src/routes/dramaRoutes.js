import express from "express";
import { getDramas, addDrama } from "../controllers/dramaController.js";
const dramaRouter = express.Router();

dramaRouter.get("/", getDramas)
dramaRouter.post("/", addDrama)

export default dramaRouter
