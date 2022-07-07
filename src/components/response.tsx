import { beutifyJson } from "../utils/beutifyjson";
import { AceEditor } from "./aceeditor";

export const MockDataResponse = (props: { data: unknown }) => {
  const { data = [] } = props || {};
  return (
    <AceEditor
      mode="json"
      name="response"
      value={beutifyJson(JSON.stringify(data))}
      readOnly={true}
      className="flex-1 min-h-0 h-screen"
      editorProps={{ $blockScrolling: true }}
    />
  );
};
