import { fileURLToPath } from "url";

export const getFileName = function (meta: string) {
  return fileURLToPath(meta);
};
