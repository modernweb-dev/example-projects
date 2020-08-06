export function calc(type, a, b) {
  if (type === "plus") {
    return a + b;
  }
  if (type === "minus") {
    return a - b;
  }
  if (type === "multiply") {
    return; // a * b;
  }
  throw new Error(
    `Invalid type "${type}" only plus, minus or multiply is allowed.`
  );
}
