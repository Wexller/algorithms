import { readFile } from "node:fs/promises";
import path from "node:path";
import { getProblemDirectories } from "./lib/fs-utils.js";
import {
  getModuleDisplayName,
  getModuleDirectoryName,
  getStageDisplayName,
  getStageDirectoryName,
  metadataSchema,
  MODULES,
  STAGES,
  type ProblemMetadata,
} from "./lib/types.js";

type ModuleSummary = {
  total: number;
  solved: number;
  blocked: number;
  pending: number;
  requiredTotal: number;
  requiredSolved: number;
};

type ProblemEntry = {
  dir: string;
  metadata: ProblemMetadata;
};

function getModuleCompletionStatus(summary: ModuleSummary): string {
  if (summary.requiredSolved === summary.requiredTotal) {
    return "complete";
  }

  if (summary.requiredSolved > 0) {
    return "in-progress";
  }

  return "not-started";
}

async function main(): Promise<void> {
  const problemDirs = await getProblemDirectories(path.resolve("problems"));
  const entries: ProblemEntry[] = await Promise.all(
    problemDirs.map(
      async (problemDir) =>
        ({
          dir: problemDir,
          metadata: metadataSchema.parse(
            JSON.parse(
              await readFile(path.join(problemDir, "metadata.json"), "utf8"),
            ),
          ),
        }) satisfies ProblemEntry,
    ),
  );
  const problems = entries.map((entry) => entry.metadata);

  const byModule = new Map<string, ModuleSummary>();
  for (const moduleName of MODULES) {
    byModule.set(moduleName, {
      total: 0,
      solved: 0,
      blocked: 0,
      pending: 0,
      requiredTotal: 0,
      requiredSolved: 0,
    });
  }

  for (const problem of problems) {
    const moduleSummary = byModule.get(problem.module);
    if (!moduleSummary) {
      continue;
    }

    moduleSummary.total += 1;
    moduleSummary[problem.status] += 1;

    if (problem.required) {
      moduleSummary.requiredTotal += 1;
      if (problem.status === "solved") {
        moduleSummary.requiredSolved += 1;
      }
    }
  }

  console.log(`Problems tracked: ${problems.length}`);
  console.log("");

  const nextRequired = entries.find(
    (entry) =>
      entry.metadata.required &&
      entry.metadata.status !== "solved" &&
      entry.metadata.status !== "blocked",
  );

  if (nextRequired) {
    console.log("Next required problem");
    console.log(
      `- ${nextRequired.metadata.id} ${nextRequired.metadata.title} (${nextRequired.dir})`,
    );
    console.log("");
  }

  for (const stage of STAGES) {
    console.log(getStageDisplayName(stage));
    for (const [moduleName, summary] of byModule.entries()) {
      const moduleEntries = entries.filter(
        (entry) =>
          entry.metadata.stage === stage &&
          entry.metadata.module === moduleName,
      );

      if (moduleEntries.length === 0) {
        continue;
      }

      const nextModuleRequired = moduleEntries.find(
        (entry) =>
          entry.metadata.required && entry.metadata.status !== "solved",
      );
      const requiredStatus = `${summary.requiredSolved}/${summary.requiredTotal}`;
      const solvedStatus = `${summary.solved}/${summary.total}`;
      const moduleStatus = getModuleCompletionStatus(summary);
      const modulePath = path.join(
        "problems",
        getStageDirectoryName(stage),
        getModuleDirectoryName(moduleName as ProblemMetadata["module"]),
      );
      console.log(
        `- ${getModuleDisplayName(moduleName as ProblemMetadata["module"])}: module=${moduleStatus}, solved=${solvedStatus}, required solved=${requiredStatus}, pending=${summary.pending}, blocked=${summary.blocked}`,
      );
      console.log(`  path: ${modulePath}`);
      if (nextModuleRequired) {
        console.log(
          `  next required: ${nextModuleRequired.metadata.id} ${nextModuleRequired.metadata.title}`,
        );
      } else {
        console.log("  next required: all required problems solved");
      }
    }
    console.log("");
  }

  const blocked = problems.filter((problem) => problem.status === "blocked");
  if (blocked.length > 0) {
    console.log("Blocked problems:");
    for (const problem of blocked) {
      console.log(`- ${problem.id} ${problem.title}`);
    }
  }
}

void main();
