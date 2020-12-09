import rollupImg from "@rollup/plugin-image";
import { fromRollup } from "@web/dev-server-rollup";

const img = fromRollup(rollupImg);

export default {
  mimeTypes: {
    './src/*.jpg': 'js'
  },
  plugins: [img()],
};
