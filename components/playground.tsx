import { useState } from "react";
import { useQuery } from "react-query";
import { fetchData } from "../api/mockdata";
import { MockDataResponse } from "./response";

export const TextArea = ({
  payload,
  onChange,
}: {
  payload: string;
  onChange: (text: string) => void;
}) => {
  return (
    <div className="flex flex-col text-orange-600">
      <textarea
        className="flex"
        rows={10}
        defaultValue={payload}
        onChange={(e) => {
          onChange(e.currentTarget.value || "");
        }}
      />
    </div>
  );
};

export const Playground = () => {
  const [payload, setPaylod] = useState(
    `{"config": {"usename": "userName", "password": "password"}}`
  );
  const queryFn = () => fetchData(payload, 4);
  const { data, refetch } = useQuery({ queryFn, queryKey: "mock_data" });

  return (
    <div>
      <div className="flex justify-end">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => refetch()}
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
