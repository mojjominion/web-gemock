import axios from "axios";
import { appConfig } from "../env/config";

const axiosConfig = {
  baseURL: appConfig.dev.baseUrl,
  timeout: 30000,
};
const instance = axios.create(axiosConfig);

export const fetchData = async (payload: string, count = 10) => {
  const d = await instance({
    method: "POST",
    url: `?count=${count}`,
    data: JSON.parse(payload),
  });

  return d.data;
};
