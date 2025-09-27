import axios from "axios";
const axiosInstance = axios.create({
  //base ul of  local  backend functions API
  baseURL: "https://amazon-backend-deployment.vercel.app",
  // // base ul of amazon backend on vercel.com
});

export { axiosInstance };
