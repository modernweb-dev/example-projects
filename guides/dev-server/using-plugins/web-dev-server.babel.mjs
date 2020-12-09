import { fromRollup } from "@web/dev-server-rollup";
import rollupBabel from "@rollup/plugin-babel";

const babel = fromRollup(rollupBabel.default);

export default {
  mimeTypes: {
    "**/*.jsx": "js",
  },
  plugins: [
    babel({
      include: ["**/*.jsx"],
      babelHelpers: "bundled",
      plugins: [["@babel/plugin-transform-react-jsx", { pragma: "h" }]],
    }),
  ],
};
