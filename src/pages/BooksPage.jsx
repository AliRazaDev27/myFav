import { useSelector } from "react-redux"
import axios from "axios"
import { useState, useEffect } from "react"
import CardBook from "../components/CardBook"

export default function BooksPage() {
  const [books, setBooks] = useState([])
  const user = useSelector(state => state.auth?.user?.data?._id) || null
  console.log(user)
  const [countries, setCountries] = useState([])
  const [languages, setLanguages] = useState([])

  const loadLanguage = async () => {
    try {
      const data = await axios.get("http://localhost:3000/books/lang/" + document.getElementById("language").value.toLowerCase())
      setBooks(data.data)
    } catch (error) {
      console.log(error)
    }
  }

  const loadCountry = async () => {
    try {
      const data = await axios.get("http://localhost:3000/books/country/" + document.getElementById("country").value)
      setBooks(data.data)
    } catch (error) {
      console.log(error)
    }
  }
  const loadData = async () => {
    try {
      const data = await axios.get("http://localhost:3000/books")
      setBooks(data.data)
    } catch (error) {
      console.log(error)
    }
  }
  const loadCategory = async () => {
    try {
      const categories = await axios.get("http://localhost:3000/categories/books/")
      setCountries(categories.data.country)
      setLanguages(categories.data.language)
    } catch (error) {
      console.log(error)
    }
  }
  const loadFinished = async () => {
    try {
      const user = "6665299cd5539d5ac1bc1403"
      const data = await axios.get("http://localhost:3000/finished/books/" + user)
      console.log(data.data.bookIds)
      setBooks(data.data.bookIds)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    loadData()
    loadCategory()
  }, [])
  return (
    <div>
      <h1>BooksPage</h1>
      <div className="bg-gray-200">
        <form>
          <label htmlFor="language">Language:</label>
          <select onChange={() => loadLanguage()} name="language" id="language">
            {languages.map((lang, index) => {
              return (
                <option key={index} value={lang}>{lang}</option>
              )
            })}
          </select>
          <label htmlFor="country">Country:</label>
          <select onChange={() => loadCountry()} name="country" id="country">
            {countries.map((country, index) => {
              return (
                <option key={index} value={country}>{country}</option>
              )
            })}
          </select>
          <button type="button" onClick={() => loadFinished()}>Load Finished</button>
        </form>
      </div>
      <div className="p-4">
        {
          books.map((book, index) => {
            return (
              <CardBook key={index} data={book} />
            )
          })
        }
      </div>
    </div>
  )
}


