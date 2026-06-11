export function solve(left: string, right: string): boolean {
  if (left.length !== right.length) {
    return false;
  }

  const counts = new Map<string, number>();
  for (const char of left) {
    counts.set(char, (counts.get(char) ?? 0) + 1);
  }

  for (const char of right) {
    const next = (counts.get(char) ?? 0) - 1;
    if (next < 0) {
      return false;
    }
    counts.set(char, next);
  }

  return Array.from(counts.values()).every((count) => count === 0);
}
