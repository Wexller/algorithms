export function solve(values: number[], target: number): [number, number] {
  let left = 0;
  let right = values.length - 1;

  while (left < right) {
    const sum = values[left] + values[right];
    if (sum === target) {
      return [left, right];
    }

    if (sum < target) {
      left += 1;
    } else {
      right -= 1;
    }
  }

  return [-1, -1];
}
