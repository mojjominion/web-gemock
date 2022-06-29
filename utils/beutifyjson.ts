export const beutifyJson = (ugly: string) => {
  var obj = JSON.parse(ugly);
  var pretty = JSON.stringify(obj, undefined, 4);
  return pretty;
};
