import { DynamicReactJson } from "./dynamicReactJson";

export const MockDataResponse = (props: { data: { data: unknown } }) => {
  const { data = [] } = props.data || {};
  return (
    <div className="max-h-36">
      <DynamicReactJson
        style={{ maxHeight: "90vh", overflow: "hidden", overflowY: "scroll" }}
        theme={"monokai"}
        src={{ response: data }}
        enableClipboard={false}
        displayDataTypes={false}
        displayObjectSize={false}
        defaultValue={[]}
      />
    </div>
  );
};
