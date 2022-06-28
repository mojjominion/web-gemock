import dynamic from "next/dynamic";

const DynamicReactJson = dynamic(import("react-json-view"), { ssr: false });

export const MockDataResponse = ({ data }: { data: unknown }) => {
  return (
    <DynamicReactJson
      theme={"monokai"}
      src={{ "Mock data": data }}
      enableClipboard={false}
      displayDataTypes={false}
      displayObjectSize={false}
      defaultValue={[]}
    />
  );
};
