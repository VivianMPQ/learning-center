import axios from "axios";

export default axios.create({
  //definimos el puerto
  baseURL: "http://localhost:3000/api/v1",
  headers: { "Content-type": "application/json" }
});