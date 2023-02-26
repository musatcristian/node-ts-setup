import path from "path";
import { fileURLToPath } from "url";

export const getDirName = function (meta: string) {
  const filename = fileURLToPath(meta);
  return path.dirname(filename);
};
