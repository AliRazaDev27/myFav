import express from "express";
import bookRouter from "./src/routes/bookRoutes.js"
import db from "./src/config/db.js"
db()
const app = express();
const port = 3000;

app.use("/books", bookRouter)
app.listen(port, () => {
  console.log(`myFav app listening on port ${port}`);
});
