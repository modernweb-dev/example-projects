import { esbuildPlugin } from "@web/dev-server-esbuild";

export default {
  plugins: [
    esbuildPlugin({ jsx: true, jsxFactory: "h", jsxFragment: "Fragment" }),
  ],
};
