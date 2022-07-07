import { useState } from "react";
import { useQuery } from "react-query";
import { fetchData } from "../api/mockdata";
import { beutifyJson } from "../utils/beutifyjson";

export const defaultPayload = JSON.stringify({
  config: {
    A: "firstName",
    B: "email",
    C: "cityName",
  },
  count: "3",
});
export const initPayload = beutifyJson(defaultPayload);

export const usePlayground = () => {
  const [payload, setPaylod] = useState(initPayload);

  const { data, refetch } = useQuery({
    queryFn: () => fetchData(payload),
    queryKey: "mock_data",
  });

  const getData = () => {
    refetch();
    setPaylod((x) => beutifyJson(x));
  };
  return { data, payload, getData, setPaylod };
};
