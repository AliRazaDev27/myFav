import fs from "fs"
import mongoose from "mongoose"
import bookModel from "./src/models/bookModel.js"
const main = async () => {
  try {
    const db = await mongoose.connect("mongodb://localhost:27017/myFav")
    console.log("connected")
  } catch (error) {
    console.log(error)
  }
}
main()
// addField()
addImages()
async function addField() {
  try {
    await bookModel.updateMany({}, { $set: { img: "" } })
  } catch (error) {
    console.log(error)
  }
}
async function addImages() {
  const file = fs.readFileSync("image_urls.txt", "utf-8").split("\n");
  const base = "https://covers.openlibrary.org/b/olid/"
  for (let line of file) {
    const url = line.split(",")[1]
    if (url !== "undefined") {
      try {
        const title = line.split(",")[0]
        console.log(title)
        const book = await bookModel.findOne({ title: title })
        book.img = base + url
        await book.save()
      } catch (error) {
        console.log(error)
      }
    }
  }
  mongoose.disconnect()
}

