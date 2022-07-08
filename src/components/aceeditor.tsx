import { fetchTemplate } from "api/mockdata";
import dynamic from "next/dynamic";
import { getCompleter } from "utils/completer";

export const AceEditor = dynamic(
  async () => {
    const data = await fetchTemplate();
    const { jsonCompleter } = getCompleter(data);
    const ace = await import("react-ace");
    const tools = await import("ace-builds/src-noconflict/ext-language_tools");
    await import("ace-builds/src-noconflict/theme-github");
    await import("ace-builds/src-noconflict/mode-json");

    tools.setCompleters([]);
    tools.addCompleter(jsonCompleter);

    return ace;
  },
  {
    // eslint-disable-next-line react/display-name
    // loading: () => <PageLoader diameter={100} />,
    ssr: false,
  }
);
