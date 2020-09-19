import { esbuildPlugin } from "@web/dev-server-esbuild";

export default {
  nodeResolve: true,
  plugins: [
    {
      serve(context) {
        console.log('serve', context.path)
      },
      transform(context) {
        console.log('transform', context.path)
      },
      resolveImport({ context  }) {
        console.log('resolveImport', context.path)
      },
    },
    esbuildPlugin({ jsx: true, jsxFactory: "h", jsxFragment: "Fragment" }),
  ],
};
