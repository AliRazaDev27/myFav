import axios from "axios"
import categoryBookModel from "../models/categoryBookModel.js"

const loadBookCategories = async () => {
  try {
    const data = await axios.get("http://localhost:3000/books/")
    let countries = new Set()
    let languages = new Set()
    for (let line of data.data) {
      let country = line.country.startsWith("\"") ? line.country.slice(1) : line.country;
      country = country.endsWith("\"") ? country.slice(0, -1) : country
      let language = line.language.startsWith("\"") ? line.language.slice(1) : line.language;
      language = language.endsWith("\"") ? language.slice(0, -1) : language
      countries.add(country)
      languages.add(language)
    }
    const countriesArray = Array.from(countries)
    const languagesArray = Array.from(languages)
    await categoryBookModel.create({ language: languagesArray, country: countriesArray })
  } catch (error) {
    console.log(error)
  }
}
const getAllBookCategories = async (req, res) => {
  try {
    const data = await categoryBookModel.findOne()
    res.json(data)
  } catch (error) {
    console.log(error)
  }
}
export { loadBookCategories, getAllBookCategories }
