import { expect } from "@esm-bundle/chai";
import { sum } from "../src/sum.js";

it("sums up 2 numbers", () => {
  expect(sum(1, 1)).to.equal(2);
  expect(sum(3, 12)).to.equal(15);
});
