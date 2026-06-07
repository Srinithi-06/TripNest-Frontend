import axios from "axios";

const api = axios.create({
  baseURL:
    "https://tripnest-backend-3.onrender.com/api",
});

export default api;