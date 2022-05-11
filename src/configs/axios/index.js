import axios from "axios";
import errorhandler from "./errorHandlererrorhandler";

const { NEXT_PUBLIC_API_HOST } = process.env;

const instance = axios.create({
  baseURL: `${NEXT_PUBLIC_API_HOST}`,
});

instance.interceptors.response.use((response) => response.data, errorhandler);

export default instance;
