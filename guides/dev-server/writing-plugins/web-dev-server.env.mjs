export default {
  plugins: [
    {
      name: "environment",
      serve(context) {
        if (context.path === "/environment.js") {
          return 'export const environment = "development";';
        }
      },
    },
  ],
};
