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
    console.log(response)
    return response.data
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message || 'An error occurred'
    return Promise.reject(errorMessage)
  }

}
export default { loginUser }
