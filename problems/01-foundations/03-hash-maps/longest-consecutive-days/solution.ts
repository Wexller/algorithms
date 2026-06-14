export function solve(days: number[]): number {
  const uniqueDays = new Set(days);
  let best = 0;

  for (const day of uniqueDays) {
    if (uniqueDays.has(day - 1)) {
      continue;
    }

    let current = day;
    let length = 1;
    while (uniqueDays.has(current + 1)) {
      current += 1;
      length += 1;
    }

    if (length > best) {
      best = length;
    }
  }

  return best;
}
