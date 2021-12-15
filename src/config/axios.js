//axios es una libreria que nos permite hacer llamadas a apis del server
import axios from 'axios'
const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL
})

export default axiosClient