import Drama from "../models/dramaModel.js";
import axios from "axios";

const getDramas = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const skip = (page - 1) * limit;

    const dramas = await Drama.find().skip(skip).limit(limit);
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
export { getDramas, addDrama }
