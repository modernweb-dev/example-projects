export default {
  plugins: [
    {
      name: "inject-html-plugin",
      transform(context) {
        if (context.path === "/demo/") {
          return context.body.replace(
            "</body>",
            "<p>Injected by my plugin</p></body>"
          );
        }
      },
    },
  ],
};
