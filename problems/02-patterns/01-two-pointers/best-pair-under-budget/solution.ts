export function solve(costs: number[], budget: number): number {
  if (costs.length < 2) {
    return -1;
  }

  const sorted = [...costs].sort((a, b) => a - b);
  let left = 0;
  let right = sorted.length - 1;
  let best = -1;

  while (left < right) {
    const sum = sorted[left] + sorted[right];
    if (sum > budget) {
      right -= 1;
      continue;
    }

    best = Math.max(best, sum);
    left += 1;
  }

  return best;
}
