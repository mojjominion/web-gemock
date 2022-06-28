import axios from "axios";
import { appConfig } from "../env/config";

export const fetchData = (payload: string, count = 10) => {
  return axios
    .post(appConfig.dev.baseUrl + `?count=${count}`, JSON.parse(payload))
    .then((d) => d.data);
};
