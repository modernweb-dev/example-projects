import { expect } from "@esm-bundle/chai";
import { calc } from '../src/calc.js';

it('calculates sums', () => {
  expect(calc('1 + 1 + 1')).to.equal(3);
  expect(calc('2 + 6 + 12')).to.equal(20);
});
