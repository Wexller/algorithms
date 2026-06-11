export function solve(costs: number[]): number {
  let prevTwo = 0;
  let prevOne = 0;

  for (let index = 2; index <= costs.length; index += 1) {
    const next = Math.min(
      prevOne + costs[index - 1],
      prevTwo + costs[index - 2],
    );
    prevTwo = prevOne;
    prevOne = next;
  }

  return prevOne;
}
