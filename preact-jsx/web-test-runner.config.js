const { esbuildPlugin } = require('@web/dev-server-esbuild');

module.exports = {
  nodeResolve: true,
  plugins: [esbuildPlugin({ jsx: true, jsxFactory: 'h', jsxFragment: 'Fragment' })],
};
