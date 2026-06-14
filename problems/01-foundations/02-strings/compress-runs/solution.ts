export function solve(text: string): string {
  if (text.length === 0) {
    return "";
  }

  let result = "";
  let runLength = 1;

  for (let index = 1; index <= text.length; index += 1) {
    if (text[index] === text[index - 1]) {
      runLength += 1;
      continue;
    }

    result += text[index - 1];
    if (runLength > 1) {
      result += String(runLength);
    }
    runLength = 1;
  }

  return result;
}
