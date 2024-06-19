import express from "express";
import { getDramas, addDrama, updateDrama } from "../controllers/dramaController.js";
const dramaRouter = express.Router();

dramaRouter.get("/", getDramas)
dramaRouter.post("/", addDrama)
dramaRouter.put("/", updateDrama)

export default dramaRouter
