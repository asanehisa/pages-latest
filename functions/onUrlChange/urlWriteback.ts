import { urlWritebackPlugin } from "https://deno.land/x/yextpages@plugins@1.0.0-beta.5/mod.ts";

const pageUrlCustomField = "c_pagesUrl"; // Need to update to api name of CF storing prod URL for entities
const API_KEY = MGMT_API_KEY;

const main = urlWritebackPlugin({
  field: pageUrlCustomField,
  apiKey: API_KEY,
  environment: "prod",
  v: "20221010",
});

export default main;
