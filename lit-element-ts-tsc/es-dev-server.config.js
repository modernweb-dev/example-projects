const { esbuildPlugin } = require('@web/dev-server-esbuild');

module.exports = {
  plugins: [esbuildPlugin({ ts: true })],
};
