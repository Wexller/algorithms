export function solve(costs: number[], budget: number): number {
  let left = 0;
  let windowSum = 0;
  let best = 0;

  for (let right = 0; right < costs.length; right += 1) {
    windowSum += costs[right];

    while (windowSum > budget && left <= right) {
      windowSum -= costs[left];
      left += 1;
    }

    best = Math.max(best, right - left + 1);
  }

  return best;
}
