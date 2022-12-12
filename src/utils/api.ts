import axios from 'axios'

const client = axios.create({
  baseURL: 'http://ip-api.com/json'
})

export default client
