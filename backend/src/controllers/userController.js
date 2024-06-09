import userModel from "../models/userModel.js"

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await userModel.findOne({ email })
    if (user) {
      if (user.password === password) {
        res.status(200).send({ success: true, message: "login successful", data: user })
      } else {
        res.send("wrong password")
      }
    } else {
      res.send("user not found")
    }
  } catch (error) {
    res.send(error)
  }
}
export const registerUser = async (req, res) => {
  try {
    const user = new userModel(req.body)
    user.save()
    res.status(201).json(user)
  }
  catch (error) {
    res.status(400).send(error)
  }
}
export const logoutUser = async (req, res) => {
  try {
    res.send("logout")
  } catch (error) {
    res.send(error)
  }
}
