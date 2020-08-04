const { esbuildPlugin } = require('@web/dev-server-esbuild');

module.exports = {
  nodeResolve: true,
  watch: true,
  open: '/demo/',

  plugins: [esbuildPlugin({ tsx: true, jsxFactory: 'h', jsxFragment: 'Fragment' })],
};
