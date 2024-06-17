import finishedModel from "../models/finishedModel.js";
import bookModel from "../models/bookModel.js";
import dramaModel from "../models/dramaModel.js"
import dramaRouter from "../routes/dramaRoutes.js";
const getFinishedBooks = async (req, res) => {
  try {
    console.log(req.params.userID)
    const data = await finishedModel.findOne({ userId: req.params.userID }).populate("bookIds")
    res.send(data)
  } catch (error) {
    res.send(error)
  }
}
const getFinishedDramas = async (req, res) => {
  try {
    console.log(req.params.userID)
    //TODO: Add Select method on required field
    const data = await finishedModel.findOne({ userId: req.params.userID }).populate("dramaIds")
    res.send(data)
  } catch (error) {
    res.send(error)
  }
}
const postFinishedBooks = async (req, res) => {
  try {
    const finished = await finishedModel.findOne({ userId: req.body.userID })
    if (!finished) {

      console.log("userid not exist")
      const newFinished = new finishedModel({ userId: req.body.userID, bookIds: [req.body.bookID] })
      newFinished.save()
      res.status(201).send("saved")
    }
    else {
      console.log("userid already exist")
      console.log(finished)
      const bookId = req.body.bookID
      finished.bookIds = [...finished.bookIds, bookId]
      finished.save()
      res.status(201).send("saved")
    }
  }
  catch (error) {
    res.status(400).send(error)
  }
}

const postFinishedDramas = async (req, res) => {
  try {
    const finished = await finishedModel.findOne({ userId: req.body.userID })
    if (!finished) {

      console.log("userid not exist")
      const newFinished = new finishedModel({ userId: req.body.userID, dramaIds: [req.body.dramaId] })
      newFinished.save()
      res.status(201).send("saved")
    }
    else {
      console.log("userid already exist")
      console.log(finished)
      const dramaId = req.body.dramaId
      finished.dramaIds = [...finished.dramaIds, dramaId]
      finished.save()
      res.status(201).send("saved")
    }
  }
  catch (error) {
    res.status(400).send(error)
  }
}

export { getFinishedBooks, postFinishedBooks, getFinishedDramas, postFinishedDramas }
