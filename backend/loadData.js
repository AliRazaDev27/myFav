import fs from "fs"
import bookModel from "./src/models/bookModel.js"
export default async function load() {
  const file = fs.readFileSync("./books.csv", "utf8").split("\n")
  file.pop()
  file.shift()
  for (let line of file) {
    const rank = line.split(",")[0] || "-1"
    const title = line.split(",")[2] || "unknown"
    const author = line.split(",")[3] || "unknown"
    const year = line.split(",")[4] || "-1"
    const country = line.split(",")[5] || "unknown"
    const language = line.split(",")[6] || "unknown"
    const pages = line.split(",")[7] || "-1"
    const words = line.split(",")[8] || "-1"
    try {
      const book = new bookModel({ rank, title, author, year, country, language, pages, words })
      await book.save()
    } catch (error) {
      console.log(error)
    }
  }
}
