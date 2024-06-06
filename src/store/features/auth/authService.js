import axios from 'axios'
export const loginUser = async (inputValues) => {
  console.log("authservice")
  try {
    const response = await axios.post("http://localhost:3000/api/users/login",
      inputValues,
      {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
    return response.data
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message || 'An error occurred'
    return Promise.reject(errorMessage)
  }

}
export default { loginUser }
