import { createSauceLabsLauncher } from '@web/test-runner-saucelabs';
import { legacyPlugin } from '@web/dev-server-legacy';

// configure the local Sauce Labs proxy, use the returned function to define the
// browsers to test
const sauceLabsLauncher = createSauceLabsLauncher({
  // your username and key for Sauce Labs, you can get this from your Sauce Labs account
  // it's recommended to store these as environment variables
  user: process.env.SAUCE_USERNAME,
  key: process.env.SAUCE_ACCESS_KEY,
  // the Sauce Labs datacenter to run your tests on, defaults to 'us-west-1'
  region: 'eu-central-1',
});

const sharedCapabilities = {
  'sauce:options': {
    name: 'my test name',
    // if you are running tests in a CI, the build id might be available as an
    // environment variable. this is useful for identifying test runs
    // this is for example the name for github actions
    build: `my project ${process.env.GITHUB_REF ?? 'local'} build ${
      process.env.GITHUB_RUN_NUMBER ?? ''
    }`,
  },
};

export default {
  concurrency: 3,
  browserStartTimeout: 1000 * 30,
  sessionStartTimeout: 1000 * 30,
  sessionFinishTimeout: 1000 * 30,
  browsers: [
    // create a browser launcher per browser you want to test
    // you can get the browser capabilities from the Sauce Labs website
    sauceLabsLauncher({
      ...sharedCapabilities,
      browserName: 'chrome',
      browserVersion: 'latest',
      platformName: 'Windows 10',
    }),    

    sauceLabsLauncher({
      ...sharedCapabilities,
      browserName: 'internet explorer',
      browserVersion: '11.0',
      platformName: 'Windows 7',
    }),
  ],
  plugins: [
    legacyPlugin()
  ],
  testFramework: {
    config: {
      timeout: '10000',
    },
  }
};