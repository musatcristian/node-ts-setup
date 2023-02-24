import { Cipher } from "crypto";

import { HELPER } from "./utils/index.js";

const a = (param: typeof Cipher): void => {
  console.info(HELPER, process.env.SECRET);
};

a(Cipher);
