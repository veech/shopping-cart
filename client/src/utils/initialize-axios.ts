import axios from 'axios'

export const initializeAxios = () => {
  axios.defaults.baseURL = process.env.REACT_APP_API_URL || 'http://localhost:8080'
}