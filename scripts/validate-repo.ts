import { access, readFile } from "node:fs/promises";
import path from "node:path";
import { getProblemDirectories, readText } from "./lib/fs-utils.js";
import {
  getModuleDirectoryName,
  getStageDirectoryName,
  metadataSchema,
  REQUIRED_FILES,
  SOLVED_NOTES_SECTIONS,
  type ProblemMetadata,
} from "./lib/types.js";

type ValidationError = {
  problemDir: string;
  message: string;
};

function hasPlaceholder(content: string): boolean {
  return (
    content.includes("Not implemented") ||
    content.includes("TODO") ||
    content.includes("[fill") ||
    content.includes("describe.skip") ||
    content.includes("it.skip") ||
    content.includes("it.todo")
  );
}

async function validateProblem(problemDir: string): Promise<ValidationError[]> {
  const errors: ValidationError[] = [];

  for (const file of REQUIRED_FILES) {
    try {
      await access(path.join(problemDir, file));
    } catch {
      errors.push({
        problemDir,
        message: `Missing required file: ${file}`,
      });
    }
  }

  if (errors.length > 0) {
    return errors;
  }

  const metadata = metadataSchema.parse(
    JSON.parse(await readFile(path.join(problemDir, "metadata.json"), "utf8")),
  ) satisfies ProblemMetadata;

  const solution = await readText(path.join(problemDir, "solution.ts"));
  const tests = await readText(path.join(problemDir, "solution.test.ts"));
  const notes = await readText(path.join(problemDir, "notes.ru.md"));
  const attempts = await readText(path.join(problemDir, "attempts.md"));
  const statement = await readText(path.join(problemDir, "problem.ru.md"));

  if (!solution.includes("export function solve")) {
    errors.push({
      problemDir,
      message: "solution.ts must export a named function `solve`.",
    });
  }

  if (!statement.startsWith("# ")) {
    errors.push({
      problemDir,
      message: "problem.ru.md must start with a level-1 heading.",
    });
  }

  const expectedDir = path.resolve(
    "problems",
    getStageDirectoryName(metadata.stage),
    getModuleDirectoryName(metadata.module),
    path.basename(problemDir),
  );

  if (problemDir !== expectedDir) {
    errors.push({
      problemDir,
      message: `Problem directory does not match numbered path convention. Expected ${expectedDir}.`,
    });
  }

  if (metadata.status === "solved") {
    if (hasPlaceholder(solution)) {
      errors.push({
        problemDir,
        message: "Solved problem still contains a placeholder solution.",
      });
    }

    if (hasPlaceholder(tests)) {
      errors.push({
        problemDir,
        message: "Solved problem still contains skipped or placeholder tests.",
      });
    }

    for (const section of SOLVED_NOTES_SECTIONS) {
      if (!notes.includes(section)) {
        errors.push({
          problemDir,
          message: `notes.ru.md is missing section ${section}.`,
        });
      }
    }

    if (hasPlaceholder(notes)) {
      errors.push({
        problemDir,
        message: "Solved problem still contains placeholder notes.",
      });
    }

    if (attempts.includes("No real attempts logged yet")) {
      errors.push({
        problemDir,
        message: "Solved problem must include a real attempt log.",
      });
    }
  }

  return errors;
}

async function main(): Promise<void> {
  const problemDirs = await getProblemDirectories(path.resolve("problems"));
  const errors: ValidationError[] = [];
  const ids = new Map<string, string>();
  const prerequisites: Array<{ id: string; prereq: string; dir: string }> = [];

  for (const problemDir of problemDirs) {
    try {
      const problemErrors = await validateProblem(problemDir);
      errors.push(...problemErrors);

      const metadata = metadataSchema.parse(
        JSON.parse(
          await readFile(path.join(problemDir, "metadata.json"), "utf8"),
        ),
      );

      if (ids.has(metadata.id)) {
        errors.push({
          problemDir,
          message: `Duplicate id ${metadata.id}; first seen in ${ids.get(metadata.id)}.`,
        });
      } else {
        ids.set(metadata.id, problemDir);
      }

      for (const prereq of metadata.prerequisites) {
        prerequisites.push({ id: metadata.id, prereq, dir: problemDir });
      }
    } catch (error) {
      errors.push({
        problemDir,
        message: error instanceof Error ? error.message : String(error),
      });
    }
  }

  for (const item of prerequisites) {
    if (!ids.has(item.prereq)) {
      errors.push({
        problemDir: item.dir,
        message: `Unknown prerequisite ${item.prereq} referenced by ${item.id}.`,
      });
    }
  }

  if (errors.length > 0) {
    console.error("Repository validation failed:");
    for (const error of errors) {
      console.error(`- ${error.problemDir}: ${error.message}`);
    }
    process.exitCode = 1;
    return;
  }

  console.log(
    `Repository validation passed for ${problemDirs.length} problems.`,
  );
}

void main();
