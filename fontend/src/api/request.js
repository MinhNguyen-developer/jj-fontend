import axios from "axios";

const ins = axios.create({
    // baseURL: process.env.REACT_APP_BASE_URL,
    baseURL: 'http://localhost:8000',
})

export default ins;