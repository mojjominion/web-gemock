import axios from "axios";
import { appConfig } from "config";

const axiosConfig = {
  baseURL: "",
  timeout: 30000,
};
const instance = axios.create(axiosConfig);

export const fetchData = async (payload: string, count = 10) => {
  const d = await instance({
    method: "POST",
    url: appConfig.apiUrl,
    data: JSON.parse(payload),
  });

  return d.data;
};
