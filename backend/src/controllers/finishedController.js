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
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    //TODO: Add Select method on required field

    const result = await finishedModel.aggregate([
      { $match: { userId: req.params.userID } },
      {
        $facet: {
          totalCount: [
            { $unwind: "$dramaIds" },
            { $count: "count" }
          ],
          paginatedData: [
            { $unwind: "$dramaIds" },
            { $skip: parseInt(skip) },
            { $limit: parseInt(limit) },
            {
              $lookup: {
                from: "dramas", // collection name of dramas
                localField: "dramaIds",
                foreignField: "_id",
                as: "dramaDetails"
              }
            },
            { $unwind: "$dramaDetails" },
            {
              $group: {
                _id: "$_id",
                dramaDetails: { $push: "$dramaDetails" }
              }
            },
            {
              $project: {
                _id: 0,
                dramaDetails: 1
              }
            }
          ]
        }
      }
    ]);

    const totalCount = result[0].totalCount[0]?.count || 0;
    const paginatedData = result[0].paginatedData[0]?.dramaDetails || [];
    res.send({
      page,
      limit,
      // total: data.dramaIds.length,
      // totalPages: Math.ceil(data.dramaIds.length / limit),
      dramas: paginatedData,
      totalCount
    })
  } catch (error) {
    res.send(error)
  }
}
const postFinishedBooks = async (req, res) => {
  console.log(req.body)
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
    const finished = await finishedModel.findOne({ userId: req.body.userId })
    if (!finished) {

      console.log("userid not exist")
      const newFinished = new finishedModel({ userId: req.body.userId, dramaIds: [req.body.dramaId] })
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
