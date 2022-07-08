export const getCompleter = (data: any) => {
  const entries = (o: any) => Object.entries(o || {});
  const suggestions = entries(data?.config).flatMap(([meta, o]) =>
    entries(o).map(([_, value]) => ({ meta, value, caption: value }))
  );

  const jsonCompleter = {
    getCompletions: (
      _editor: unknown,
      _session: unknown,
      _pos: unknown,
      _prefix: unknown,
      callback: any
    ) => callback(null, suggestions),
  };
  return { jsonCompleter };
};
