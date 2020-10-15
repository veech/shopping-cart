import axios from 'axios'

export const initializeAxios = () => {
  axios.defaults.baseURL = process.env.REACT_APP_API_URL || 'http://localhost:8080'
  // Defaulting user to 'user1' for simplicity
  axios.defaults.headers = { token: 'user1' }
}
