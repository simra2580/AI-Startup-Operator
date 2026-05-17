import axios from "axios";

const API = axios.create({
  baseURL: "https://ai-startup-operator.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;