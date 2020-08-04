const { esbuildPlugin } = require('@web/dev-server-esbuild');

module.exports = {
  nodeResolve: true,
  plugins: [esbuildPlugin({ tsx: true, jsxFactory: 'h', jsxFragment: 'Fragment' })],
};
