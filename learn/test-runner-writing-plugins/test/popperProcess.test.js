import { expect } from "@esm-bundle/chai";

it("ensures that popper still depends on a global process variable", async () => {
  const request = await fetch(
    new URL("../node_modules/@popperjs/core/lib/index.js", import.meta.url)
  );
  const code = await request.text();
  expect(code).to.include("process.env.NODE_ENV");
});
