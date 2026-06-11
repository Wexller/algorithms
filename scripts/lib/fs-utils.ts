import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

export async function getProblemDirectories(
  rootDir: string,
): Promise<string[]> {
  const result: string[] = [];

  async function walk(currentDir: string): Promise<void> {
    const entries = await readdir(currentDir, { withFileTypes: true });
    const hasMetadata = entries.some(
      (entry) => entry.isFile() && entry.name === "metadata.json",
    );

    if (hasMetadata) {
      result.push(currentDir);
      return;
    }

    await Promise.all(
      entries
        .filter((entry) => entry.isDirectory())
        .map((entry) => walk(path.join(currentDir, entry.name))),
    );
  }

  await walk(rootDir);

  return result.sort();
}

export async function readText(filePath: string): Promise<string> {
  return readFile(filePath, "utf8");
}
