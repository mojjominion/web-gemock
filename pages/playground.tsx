import { useState } from "react";
import { useQuery } from "react-query";
import { fetchData } from "../api/mockdata";
import { TextArea } from "../components/editor";
import { MockDataResponse } from "../components/response";
import { beutifyJson } from "../utils/beutifyjson";

export const Playground = () => {
  const [payload, setPaylod] = useState(
    `{"config": {"usename": "userName", "password": "password"}}`
  );
  const queryFn = () => fetchData(payload, 4);
  const { data, refetch } = useQuery({ queryFn, queryKey: "mock_data" });
  const getData = () => {
    refetch();
    setPaylod((x) => beutifyJson(x));
  };

  return (
    <div>
      <div className="flex justify-end">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={getData}
        >
          Run
        </button>
      </div>
      <div className="grid grid-cols-2 gap-1">
        <TextArea {...{ payload, onChange: setPaylod }} />
        <MockDataResponse {...{ data }} />
      </div>
    </div>
  );
};
export default Playground;
