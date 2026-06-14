export function solve(words: string[]): string[][] {
  const groups = new Map<string, string[]>();

  for (const word of words) {
    const key = buildShiftKey(word);
    const group = groups.get(key) ?? [];
    group.push(word);
    groups.set(key, group);
  }

  return Array.from(groups.values());
}

function buildShiftKey(word: string): string {
  if (word.length <= 1) {
    return "single";
  }

  const offsets: number[] = [];
  for (let index = 1; index < word.length; index += 1) {
    const previous = word.charCodeAt(index - 1) - 97;
    const current = word.charCodeAt(index) - 97;
    offsets.push((current - previous + 26) % 26);
  }

  return offsets.join(",");
}
