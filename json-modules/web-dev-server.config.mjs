import { fromRollup } from "@web/dev-server-rollup";
import rollupJson from "@rollup/plugin-json";

const json = fromRollup(rollupJson);

export default {
  mimeTypes: {
    "**/*.json": "js",
  },
  plugins: [json()],
};
