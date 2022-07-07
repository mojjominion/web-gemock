import dynamic from "next/dynamic";

export const AceEditor = dynamic(
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
