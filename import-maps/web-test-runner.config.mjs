import { importMapsPlugin } from "@web/dev-server-import-maps";

export default {
  plugins: [
    importMapsPlugin({
      inject: {
        importMap: {
          imports: {
            "lit-html": "/node_modules/lit-html/lit-html.js",
            "lit-html/": "/node_modules/lit-html/",
            "lit-element": "/node_modules/lit-element/lit-element.js",
            "chai/": "/node_modules/chai/",
            "@open-wc/testing": "/node_modules/@open-wc/testing/index.js",
            "@open-wc/testing/": "/node_modules/@open-wc/testing/",
            "@open-wc/testing-helpers": "/node_modules/@open-wc/testing-helpers/index.js",
            "@open-wc/testing-helpers/": "/node_modules/@open-wc/testing-helpers/",
            "@open-wc/semantic-dom-diff": "/node_modules/@open-wc/semantic-dom-diff/index.js",
            "@open-wc/scoped-elements": "/node_modules/@open-wc/scoped-elements/index.js",
            "@open-wc/dedupe-mixin": "/node_modules/@open-wc/dedupe-mixin/index.js",
            "chai-a11y-axe": "/node_modules/chai-a11y-axe/index.js",
            "chai-dom": "/node_modules/chai-dom/chai-dom.js",
            "sinon-chai": "/node_modules/sinon-chai/lib/sinon-chai.js",
            "axe-core/": "/node_modules/axe-core/",
          },
        },
      },
    }),
  ],
};
