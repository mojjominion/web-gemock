import dynamic from "next/dynamic";

const AceEditor = dynamic(
  async () => {
    const ace = await import("react-ace");
    import("ace-builds/src-noconflict/theme-github");
    import("ace-builds/src-noconflict/mode-json");
    return ace;
  },
  {
    // eslint-disable-next-line react/display-name
    // loading: () => <PageLoader diameter={100} />,
    ssr: false,
  }
);
export function TextArea(props: {
  payload: string;
  onChange: (text: string) => void;
}) {
  const { payload, onChange } = props;
  const onTextChange = (txt: string) => {
    onChange(txt);
  };

  return (
    <div className="flex flex-col min-h-full">
      <AceEditor
        mode="json"
        theme="github"
        value={payload}
        onChange={onTextChange}
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: true }}
      />
    </div>
  );
}
