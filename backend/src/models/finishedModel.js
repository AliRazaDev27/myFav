import mongoose from 'mongoose';

const finishedSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true
  },
  bookIds: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'book' }],
    default: []
  },
  dramaIds: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Drama' }],
    default: []
  }
}, { timestamps: true });
export default mongoose.model("finished", finishedSchema)
