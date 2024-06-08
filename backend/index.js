import express from "express";
import bookRouter from "./src/routes/bookRoutes.js"
import categoryRouter from "./src/routes/categoryRoutes.js"
import db from "./src/config/db.js"
import cors from "cors"

db()
const app = express();
const port = 3000;

app.use(cors())
app.use("/books", bookRouter)
app.use("/categories", categoryRouter)
app.listen(port, () => {
  console.log(`myFav app listening on port ${port}`);
});
