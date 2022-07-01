import { TextArea } from "../components/editor";
import { MockDataResponse } from "../components/response";
import { appConfig } from "../env/config";
import { usePlayground } from "../hooks/usePlayground";

export const Playground = () => {
  const { data, payload, getData, setPaylod } = usePlayground();

  return (
    <div>
      <div className="relative">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={getData}
        >
          Run
        </button>
      </div>
      <div className="grid grid-cols-2 gap-1 py-1">
        <TextArea {...{ payload, onChange: setPaylod }} />
        <MockDataResponse {...{ data }} />
      </div>
      <p className="px-4">
        Reference:{" "}
        <a
          className="text-blue-500"
          target={"_blank"}
          href={appConfig.dev.baseUrl}
          rel="noreferrer"
        >
          {appConfig.dev.baseUrl}
        </a>
      </p>
    </div>
  );
};
export default Playground;
