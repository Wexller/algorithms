export function solve(values: number[]): number[] {
  const result = Array(values.length).fill(1);

  let prefixProduct = 1;
  for (let index = 0; index < values.length; index += 1) {
    result[index] = prefixProduct;
    prefixProduct *= values[index];
  }

  let suffixProduct = 1;
  for (let index = values.length - 1; index >= 0; index -= 1) {
    result[index] *= suffixProduct;
    suffixProduct *= values[index];
  }

  return result;
}
