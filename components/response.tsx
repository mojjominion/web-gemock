import dynamic from "next/dynamic";

const DynamicReactJson = dynamic(import("react-json-view"), { ssr: false });

export const MockDataResponse = ({ data }: { data: unknown }) => {
  return (
    <div className="max-h-36">
      <DynamicReactJson
        style={{
          maxHeight: "90vh",
          overflow: "hidden",
          overflowY: "scroll",
        }}
        theme={"monokai"}
        src={{ "Mock data": data }}
        enableClipboard={false}
        displayDataTypes={false}
        displayObjectSize={false}
        defaultValue={[]}
      />
    </div>
  );
};
