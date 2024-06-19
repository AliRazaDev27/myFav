import Drama from "../models/dramaModel.js";
import axios from "axios";

const getDramas = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const skip = (page - 1) * limit;

    const dramas = await Drama.find({ rating: { $ne: "N/A" } }).sort({ rating: -1 }).skip(skip).limit(limit);

    const total = await Drama.countDocuments();

    res.json({
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
      dramas,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

const addDrama = async (req, res) => {
  try {
    const drama = new Drama(req.body)
    drama.save()
    res.status(201).json(drama)
  }
  catch (error) {
    res.status(400).send(error)
  }
}
const updateDrama = async (req, res) => {
  try {
    const id = req.body.id
    const data = {}
    req.body.title && (data.title = req.body.title)
    req.body.year && (data.year = req.body.year)
    req.body.rating && (data.rating = req.body.rating)
    req.body.genre && (data.genres = req.body.genre.split(","))
    console.log(req.body.tags)
    req.body.tag && (data.tags = req.body.tag.split(","))
    req.body.description && (data.description = req.body.description)
    req.body.img && (data.img = req.body.img)
    req.body.url && (data.url = req.body.url)
    const result = await Drama.findByIdAndUpdate(id, data, { new: true })
    res.send({ success: true, data: result })
  } catch (error) {
    res.send(error)
  }
}
export { getDramas, addDrama, updateDrama }



// try {
//   console.log(req.body.id)
//   const current = await Drama.findById(req.body.id)
//   const body = {
//     title,
//     year,
//     rating,
//     genres: genresArray,
//     tags: tagsArray,
//     description,
//     img,
//     url
//   }
//   const drama = await Drama.findOneAndUpdate({ _id: req.body.id }, body, { new: true })
//   res.status(201).json(drama)
// }
// catch (error) {
//   res.status(400).send(error)
// }
//
