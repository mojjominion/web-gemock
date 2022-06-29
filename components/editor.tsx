export const TextArea = ({
  payload,
  onChange,
}: {
  payload: string;
  onChange: (text: string) => void;
}) => {
  const onTextChange = (txt: string) => {
    onChange(txt);
  };

  return (
    <div className="flex flex-col text-orange-600 min-h-full">
      <textarea
        className="flex p-3"
        rows={25}
        value={payload}
        onChange={(e) => {
          onTextChange(e.currentTarget.value || "");
        }}
      />
    </div>
  );
};
