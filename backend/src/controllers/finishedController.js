import finishedModel from "../models/finishedModel.js";
import bookModel from "../models/bookModel.js";

const getFinishedBooks = async (req, res) => {
  try {
    const data = await finishedModel.findOne({ userId: req.body.userId }).populate("bookIds")
    res.send(data)
  } catch (error) {
    res.send(error)
  }
}

const postFinishedBooks = async (req, res) => {
  try {
    const finished = await finishedModel.findOne({ userId: req.body.userId })
    if (!finished) {

      console.log("userid not exist")
      const newFinished = new finishedModel({ userId: req.body.userId, bookIds: [req.body.bookId] })
      newFinished.save()
      res.status(201).send("saved")
    }
    else {
      console.log("userid already exist")
      console.log(finished)
      const bookId = req.body.bookId
      finished.bookIds = [...finished.bookIds, bookId]
      finished.save()
      res.status(201).send("saved")
    }
  }
  catch (error) {
    res.status(400).send(error)
  }
}

export { getFinishedBooks, postFinishedBooks }
