import express from "express";
import { getDramas, addDrama, updateDrama, getDramasToWatch, deleteDrama } from "../controllers/dramaController.js";
const dramaRouter = express.Router();

dramaRouter.get("/", getDramas)
dramaRouter.get("/:id", getDramasToWatch)
dramaRouter.post("/", addDrama)
dramaRouter.put("/", updateDrama)
dramaRouter.delete("/:id", deleteDrama)

export default dramaRouter
