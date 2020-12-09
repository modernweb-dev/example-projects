import { expect } from "@esm-bundle/chai";
import { calc } from "../src/calc.js";

it("does plus for 2 numbers", () => {
  expect(calc("plus", 1, 1)).to.equal(2);
  expect(calc("plus", 3, 12)).to.equal(15);
});

it("does minus for 2 numbers", () => {
  expect(calc("minus", 3, 1)).to.equal(2);
});

it("throws if type is not plus or minus", () => {
  expect(() => calc("foo", 3, 1)).to.throw(
    `Invalid type "foo" only plus, minus or multiply is allowed.`
  );
});

it("does multiply for 2 numbers", () => {
  expect(calc("multiply", 3, 3)).to.equal(9);
});
