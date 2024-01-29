import axios, { AxiosInstance } from "axios";
import { baseURL } from "../Const/Const";

const axiosapi: AxiosInstance = axios.create({
  baseURL: baseURL,
});

export default axiosapi;
