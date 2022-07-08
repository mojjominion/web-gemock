import { fetchTemplate } from "./mockdata";

export const templaterOptions = {
  queryKey: "template",
  queryFn: fetchTemplate,
  cacheTime: Infinity,
  staleTime: Infinity,
};
