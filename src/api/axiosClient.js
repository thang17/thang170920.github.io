import axios from "axios"

const axiosClient = axios.create({
    baseURL: 'http://localhost:3001',
    headers: {'X-Custom-Header': 'foobar'}
  });

export default axiosClient