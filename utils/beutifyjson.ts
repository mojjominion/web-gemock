export const beutifyJson = (ugly: string) => {
  var obj = JSON.parse(ugly);
  var pretty = ugly;
  try {
    pretty = JSON.stringify(obj, undefined, 4);
  } catch (error) {
    pretty = ugly;
  }

  return pretty;
};
