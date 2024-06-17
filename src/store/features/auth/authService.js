import axios from 'axios'
export const loginUser = async (inputValues) => {
  console.log("authservice")
  try {
    const response = await axios.post("http://localhost:3000/users/login",
      inputValues,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
    if (response.data.success === true) {
      window.localStorage.setItem("user", JSON.stringify(response.data))
    }
    console.log(response)
    return response.data
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message || 'An error occurred'
    return Promise.reject(errorMessage)
  }

}
export const logoutUser = async () => {
  try {
    const response = await axios.get("http://localhost:3000/users/logout")
    if (response.data.success === true) {
      window.localStorage.removeItem("user")
    }
    return response.data
  } catch (error) {
    console.log(error)
  }
}
export default { loginUser, logoutUser }
