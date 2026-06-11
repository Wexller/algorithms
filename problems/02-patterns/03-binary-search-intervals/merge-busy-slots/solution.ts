export function solve(slots: Array<[number, number]>): Array<[number, number]> {
  if (slots.length === 0) {
    return [];
  }

  const sorted = [...slots].sort((left, right) => left[0] - right[0]);
  const merged: Array<[number, number]> = [sorted[0]];

  for (let index = 1; index < sorted.length; index += 1) {
    const current = sorted[index];
    const last = merged[merged.length - 1];

    if (current[0] <= last[1]) {
      last[1] = Math.max(last[1], current[1]);
    } else {
      merged.push([...current] as [number, number]);
    }
  }

  return merged;
}
