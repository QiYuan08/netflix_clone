import axios from "axios";
import { BASE_URL } from "~/url";

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 30000,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

export default instance;
