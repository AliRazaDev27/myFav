import mongoose from "mongoose";

const categoryBookSchema = new mongoose.Schema({
  language: {
    type: Array
  },
  country: {
    type: Array
  }
}, { timestamps: true });

export default mongoose.model("categoryBook", categoryBookSchema);
