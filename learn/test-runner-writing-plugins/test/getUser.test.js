import { expect } from "@esm-bundle/chai";
import { getUser } from "../src/getUser.js";

it("can get meta data via a userId", async () => {
  const user3 = await getUser(3);
  expect(user3.name).to.equal("Lea");

  const user10 = await getUser(10);
  expect(user10.name).to.equal("Peter");
});
