import axios from "axios";

export const BASE_IMAGE_PATH = "https://a0d3-103-186-197-132.ngrok-free.app";
const axiosInstance2 = axios.create({
  baseURL: `${BASE_IMAGE_PATH}/api`,
  withCredentials: true,
});
axios.defaults.headers.get["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

axiosInstance2.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || "Something went wrong"
    )
);

export default axiosInstance2;
