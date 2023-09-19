import axios from "axios";

const api = axios.create({
  baseURL: 'https://k6ncnutkcb.execute-api.us-east-1.amazonaws.com',
});

export default api;