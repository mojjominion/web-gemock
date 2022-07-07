import axios from "axios";

const axiosConfig = {
  baseURL: "",
  timeout: 30000,
};
const instance = axios.create(axiosConfig);

export const fetchData = async (payload: string, count = 10) => {
  const d = await instance({
    method: "POST",
    url: `https://api.gemock.com/api/?count=${count}`,
    data: JSON.parse(payload),
  });

  return d.data;
};
