import axios from "axios";

const API = axios.create({
  baseURL: "https://t3-library-backend.herokuapp.com/",
});

export default API;
