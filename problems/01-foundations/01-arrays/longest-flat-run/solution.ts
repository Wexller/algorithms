export function solve(values: number[]): number {
  if (values.length === 0) {
    return 0;
  }

  let result = 1;
  let currentRun = 1;

  for (let i = 1; i < values.length; i++) {
    const currentValue = values[i];
    const prevValue = values[i - 1];

    if (currentValue === prevValue) {
      currentRun++;
      continue;
    }

    if (currentRun > result) {
      result = currentRun;
    }

    currentRun = 1;
  }

  return Math.max(result, currentRun);
}
