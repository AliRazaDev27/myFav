import express from "express";
import bookRouter from "./src/routes/bookRoutes.js"
import categoryRouter from "./src/routes/categoryRoutes.js"
import userRouter from "./src/routes/userRoutes.js"
import finishedRouter from "./src/routes/finishedRoutes.js";
import db from "./src/config/db.js"
import cors from "cors"
db()
const app = express();
const port = 3000;

app.use(cors())
app.use(express.json())

app.use("/users", userRouter)
app.use("/books", bookRouter)
app.use("/categories", categoryRouter)
app.use("/finished", finishedRouter)

app.listen(port, () => {
  console.log(`myFav app listening on port ${port}`);
});
