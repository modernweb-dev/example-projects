export default {
  files: "test/**/*.test.js",
  nodeResolve: true,
  plugins: [
    {
      name: "provide-process",
      transform(context) {
        if (context.path === "/") {
          const transformedBody = context.body.replace(
            "</head>",
            '<script>window.process = { env: { NODE_ENV: "development" } }</script></head>'
          );
          return transformedBody;
        }
      },
    },
    {
      name: "mock-api",
      serve(context) {
        if (context.path === "/api/users/3") {
          return { body: '{ "name": "Lea" }', type: "json" };
        }
        if (context.path === "/api/users/10") {
          return { body: '{ "name": "Peter" }', type: "json" };
        }
      },
    },
  ],
};
