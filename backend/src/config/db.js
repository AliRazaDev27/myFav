import mongoose from "mongoose";
const db = async () => {
  try {
    const db = await mongoose.connect("mongodb://localhost:27017/myFav")
    console.log(`connected to ${db.connection.name}`)
  }
  catch (error) {
    console.error(error)
  }
}
export default db
