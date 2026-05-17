import axios from "axios";

const API = axios.create({
  baseURL: "https://ai-startup-operator.onrender.com/api",
});

export default API;