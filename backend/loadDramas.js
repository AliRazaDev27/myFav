import fs from "fs"
import mongoose from "mongoose"
import dramaModel from "./src/models/dramaModel.js"


mongoose.connect("mongodb://localhost:27017/myFav")
main()
async function main() {
  const done = fs.readFileSync("./done.tsv", "utf-8").split("\n")
  const pure = fs.readFileSync("./pureData.txt", "utf-8").split("\n")
  pure.pop()
  for (let p of pure) {
    for (let d of done) {
      let p_data = p.split("|")
      let d_data = d.split("\t")
      if (p_data[0] === d_data[0]) {
        let url = d_data[1] || "undefined"
        let img = d_data[2] || "undefined"
        let title = p_data[1] || "undefined"
        let year = p_data[2] || "undefined"
        let rating = p_data[3] || "undefined"
        let description = p_data[4] || "undefined"
        let genres = p_data[5] || "undefined"
        let tags = p_data[6] || "undefined"
        console.log(`url: ${url}, img: ${img}, title: ${title}, year: ${year}, rating: ${rating}, description: ${description}, genres: ${genres}, tags: ${tags}`)
        await load(url, img, title, year, rating, description, genres, tags)
        break
      }
    }
  }
}
async function load(url, img, title, year, rating, description, genres, tags) {

  try {
    let genreArray = genres.split(",")
    let tagArray = tags.split(",")
    await dramaModel.create({ url, img, title, year, rating, description, genres: genreArray, tags: tagArray })
    return true
  } catch (error) {
    return false
  }
}

