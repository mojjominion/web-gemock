import { AceEditor } from "./aceeditor";

export function TextArea(props: {
  payload: string;
  onChange: (text: string) => void;
}) {
  const { payload, onChange } = props;
  const onTextChange = (txt: string) => {
    onChange(txt);
  };

  return (
    <AceEditor
      mode="json"
      theme="github"
      value={payload}
      onChange={onTextChange}
      name="editor"
      className="flex-1"
      enableBasicAutocompletion
      enableLiveAutocompletion
      enableSnippets
      editorProps={{ $blockScrolling: true }}
    />
  );
}
