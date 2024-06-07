import mongoose from "mongoose";
const bookSchema = new mongoose.Schema({
  rank: {
    type: String
  },
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  year: {
    type: String
  },
  country: {
    type: String
  },
  language: {
    type: String
  },
  pages: {
    type: String
  },
  words: {
    type: String
  },
  description: {
    type: String
  },
  genre: {
    type: String
  },
  haveRead: {
    type: Boolean
  }
}, { timestamps: true })
const bookModel = mongoose.model("book", bookSchema)
export default bookModel
