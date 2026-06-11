import { mkdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { parseArgs } from "node:util";
import { catalog } from "./lib/catalog.js";
import { getModuleDirectoryName, getStageDirectoryName } from "./lib/types.js";

function buildProblemStatement(problem: (typeof catalog)[number]): string {
  const examples = problem.examples
    .map(
      (example, index) => `### Example ${index + 1}

- Input: ${example.input}
- Output: ${example.output}
- Explanation: ${example.explanation}
`,
    )
    .join("\n");

  const constraints = problem.constraints.map((item) => `- ${item}`).join("\n");

  return `# ${problem.title}

## Summary

${problem.summary}

## Input

${problem.inputDescription}

## Output

${problem.outputDescription}

## Examples

${examples}
## Constraints

${constraints}

## Status

- Stage: \`${problem.stage}\`
- Module: \`${problem.module}\`
- Difficulty: \`${problem.difficulty}\`
- Required: \`${problem.required}\`
- Status: \`${problem.status}\`
`;
}

function buildPendingNotes(problem: (typeof catalog)[number]): string {
  return `# ${problem.title}

## Approach

[fill in the intended idea before coding]

## Complexity

- Time: ${problem.expectedTimeComplexity}
- Space: ${problem.expectedSpaceComplexity}

## Invariants

[fill in the invariant or core state]

## Edge Cases

[fill in edge cases you tested or still need to test]

## Reflection

[fill in what made the problem tricky, what signal pointed to the pattern, and what you would do differently next time]
`;
}

function buildPendingAttempts(): string {
  return `# Attempts

| Attempt | Status | Notes |
| --- | --- | --- |
| 0 | pending | No real attempts logged yet. Replace this row after your first serious try. |
`;
}

async function exists(targetPath: string): Promise<boolean> {
  try {
    await stat(targetPath);
    return true;
  } catch {
    return false;
  }
}

async function main(): Promise<void> {
  const { values } = parseArgs({
    options: {
      force: { type: "boolean", default: false },
    },
  });

  let created = 0;
  let skipped = 0;

  for (const problem of catalog) {
    const problemDir = path.resolve(
      "problems",
      getStageDirectoryName(problem.stage),
      getModuleDirectoryName(problem.module),
      problem.slug,
    );

    if ((await exists(problemDir)) && !values.force) {
      skipped += 1;
      continue;
    }

    await mkdir(problemDir, { recursive: true });

    const metadata = {
      id: problem.id,
      title: problem.title,
      stage: problem.stage,
      module: problem.module,
      difficulty: problem.difficulty,
      tags: problem.tags,
      required: problem.required,
      prerequisites: problem.prerequisites,
      sourceType: "original-local",
      expectedTimeComplexity: problem.expectedTimeComplexity,
      expectedSpaceComplexity: problem.expectedSpaceComplexity,
      status: problem.status,
    };

    await writeFile(
      path.join(problemDir, "metadata.json"),
      `${JSON.stringify(metadata, null, 2)}\n`,
    );
    await writeFile(
      path.join(problemDir, "problem.ru.md"),
      buildProblemStatement(problem),
    );
    await writeFile(path.join(problemDir, "solution.ts"), problem.solution);
    await writeFile(path.join(problemDir, "solution.test.ts"), problem.test);
    await writeFile(
      path.join(problemDir, "notes.ru.md"),
      problem.notes ?? buildPendingNotes(problem),
    );
    await writeFile(
      path.join(problemDir, "attempts.md"),
      problem.attempts ?? buildPendingAttempts(),
    );
    created += 1;
  }

  console.log(
    `Seeded ${created} problems. Skipped ${skipped} existing directories.`,
  );
}

void main();
