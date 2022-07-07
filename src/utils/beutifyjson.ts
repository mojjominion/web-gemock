export const beutifyJson = (ugly: string) => {
  var pretty = ugly;
  try {
    var obj = JSON.parse(ugly);
    pretty = JSON.stringify(obj, undefined, 4);
  } catch (error) {
    alert(error);
    pretty = ugly;
  }

  return pretty;
};
