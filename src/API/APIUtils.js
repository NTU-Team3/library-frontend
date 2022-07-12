import axios from "axios";

const API = axios.create({
  baseURL: "https://library-backend-t3.herokuapp.com/",
});

export default API;
