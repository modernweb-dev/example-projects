import { sum } from './sum.js';

export function calc(inputString) {
  const numbers = inputString.split('+').map(number => parseInt(number));
  return sum(...numbers);
}
