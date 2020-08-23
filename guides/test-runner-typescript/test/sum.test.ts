import { expect } from '@open-wc/testing';
import { sum } from '../src/sum.js';

it('sums up 2 numbers', () => {
  expect(sum(1, 1)).to.equal(2);
  expect(sum(3, 12)).to.equal(15);
});

it('sums up 3 numbers', () => {
  expect(sum(1, 1, 1)).to.equal(3);
  expect(sum(3, 12, 5)).to.equal(20);
});
