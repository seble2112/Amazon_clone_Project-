import axios from "axios";
const axiosInstance = axios.create({
  //base ul of  th emy amazon  backend functions API 
  baseURL: "http://127.0.0.1:5001/clone-20b7f/us-central1/api",
  // base ul of amazon backend on render.com
  //   baseURL: "https://amazon-api-deploy-1-qtc6.onrender.com",
});

export { axiosInstance };
