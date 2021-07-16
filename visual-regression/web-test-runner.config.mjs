import { visualRegressionPlugin } from "@web/test-runner-visual-regression/plugin";

export default {
  plugins: [visualRegressionPlugin({
    update: process.argv.includes('--update-visual-baseline'),
  })],
};
