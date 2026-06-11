export function solve(text: string): string {
  return text.trim().split(/\s+/).reverse().join(" ");
}
