export function sum(...numbers: number[]) {
  let sum = 0;
  for (const number of numbers) {
    sum += number;
  }
  return sum;
}
