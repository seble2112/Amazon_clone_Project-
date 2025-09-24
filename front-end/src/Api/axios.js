import axios from "axios";
const axiosInstance = axios.create({
  //base ul of amazon backend on localhost
   baseURL: "http://localhost:5000/clone-2024-14bae/us-central1/api",
  // base ul of amazon backend on render.com
//   baseURL: "https://amazon-api-deploy-1-qtc6.onrender.com",
});

export { axiosInstance };
