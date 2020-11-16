import { storybookPlugin } from "@web/dev-server-storybook";

export default {
  nodeResolve: true,
  open: true,
  plugins: [storybookPlugin({ type: "web-components" })],
};
