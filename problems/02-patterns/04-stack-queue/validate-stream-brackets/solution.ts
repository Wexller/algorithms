export function solve(stream: string): boolean {
  const closingToOpening = new Map<string, string>([
    [")", "("],
    ["]", "["],
    ["}", "{"],
  ]);
  const opening = new Set(closingToOpening.values());
  const stack: string[] = [];

  for (const token of stream) {
    if (opening.has(token)) {
      stack.push(token);
      continue;
    }

    if (closingToOpening.get(token) !== stack.pop()) {
      return false;
    }
  }

  return stack.length === 0;
}
