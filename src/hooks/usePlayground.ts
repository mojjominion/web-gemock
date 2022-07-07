import { useState } from "react";
import { useQuery } from "react-query";
import { fetchData } from "../api/mockdata";
import { beutifyJson } from "../utils/beutifyjson";

export const defaultPayload = {
  config: {
    A: "firstName",
    B: "email",
    C: "cityName",
  },
};
const initPayload = beutifyJson(JSON.stringify(defaultPayload));

export const usePlayground = () => {
  const [payload, setPaylod] = useState(initPayload);

  const { data, refetch } = useQuery({
    queryFn: () => fetchData(payload, 4),
    queryKey: "mock_data",
  });

  const getData = () => {
    refetch();
    setPaylod((x) => beutifyJson(x));
  };
  return { data, payload, getData, setPaylod };
};
