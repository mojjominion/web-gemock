import { templaterOptions } from "hooks/useConfigTemplate";
import { NextPage } from "next";
import { dehydrate, QueryClient } from "react-query";
import { TextArea } from "../components/editor";
import { MockDataResponse } from "../components/response";
import { usePlayground } from "../hooks/usePlayground";

const Playground: NextPage = () => {
  const { data, payload, getData, setPaylod } = usePlayground();

  return (
    <div className="min-h-screen h-screen">
      <div className="relative">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={getData}
        >
          Run
        </button>
      </div>
      <div className="flex flex-1 justify-between">
        <TextArea {...{ payload, onChange: setPaylod }} />
        <MockDataResponse {...{ data }} />
      </div>
      {/* <footer className="text-center lg:text-left">
        <div className="px-2">
          Reference:{" "}
          <a
            className="text-blue-500"
            target={"_blank"}
            href={appConfig.sample}
            rel="noreferrer"
          >
            {appConfig.apiUrl}
          </a>
        </div>
      </footer> */}
    </div>
  );
};
export async function getStaticProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(templaterOptions);
  return {
    props: { dehydratedState: dehydrate(queryClient) },
  };
}
export default Playground;
